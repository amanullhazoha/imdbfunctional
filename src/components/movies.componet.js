import React, { useEffect, useState } from "react";
import _ from "lodash";

import Table from "./common/table.component";
import getMovies from "../services/getMovies";
import getGenres from "../services/getGenres";
import Filter from "./common/filter.component";
import Pagination from "./common/pagination.component";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [sorting, setSorting] = useState({ path: "id", order: "asc" });
    const [pagination, setPagination] = useState({ activePage: 1, pageCount: 10, });
    const [selectGenre, setSelectGenre] = useState("All Genres");

    useEffect(() => {
        setMovies(getMovies());
        setGenres(["All Genres", ...getGenres()]);
    }, []);

    const handleFilter = (genre) => {
        setSelectGenre(genre);
        setPagination({ ...pagination, activePage: 1 });
    };

    const handleSort = (sorting) => {
        setSorting(sorting);
    };

    const handleClickPage = (activePage) => {
        setPagination({ ...pagination, activePage });
    };

    const filteredMovies = () => {
        const filterMovies = movies.filter((movie) => {
            if (selectGenre === "All Genres") return true;
            if (movie.genres.includes(selectGenre)) return true;
            return false;
        });

        return filterMovies;
    };

    const paginateMovies = (movies) => {
        const { activePage, pageCount } = pagination;
        const start = (activePage - 1) * pageCount;
        return movies.slice(start, start + pageCount);
    };

    const sortingMovies = (movies) => {
        const { path, order } = sorting;
        return _.orderBy(movies, [path], [order]);
    };

    const filterMovies = filteredMovies();
    const paginated = paginateMovies(filterMovies);
    const moviesData = sortingMovies(paginated);

    const columns = [
        {
            label: "Rank",
            path: "id",
            sort: "true",
            content: (movie, path) => <td>{movie[path]}</td>,
        },
        {
            label: "Title",
            path: "title",
            sort: "true",
            content: (movie, path) => (
                <td className="title">{movie[path]}</td>
            ),
        },
        {
            label: "Duration",
            path: "runtime",
            sort: "true",
            content: (movie, path) => <td>{movie[path]} Min</td>,
        },
        {
            label: "Director",
            path: "director",
            sort: "true",
            content: (movie, path) => (
                <td>{movie[path]}</td>
            ),
        },
        {
            label: "Photo",
            path: "posterUrl",
            content: (movie, path) => (
                <td>
                    <img
                        src={movie[path]}
                        alt={movie.id}
                        style={{ width: "45px", height: "auto" }}
                    />
                </td>
            ),
        },
    ];

    return (
        <div className="container" id="movies">
            <div className="row">
                <div className="col-md-10 movieTable">
                    <Table
                        columns={columns}
                        items={moviesData}
                        sorting={sorting}
                        onSort={handleSort}
                    />
                    <Pagination
                        totalItems={filterMovies.length}
                        pageCount={pagination.pageCount}
                        activePage={pagination.activePage}
                        onClickPage={handleClickPage}
                    />
                </div>
                <Filter
                    filterItems={genres}
                    onFilter={handleFilter}
                    selectFilterItem={selectGenre}
                />
            </div>
        </div>
    );
};

export default Movies;
