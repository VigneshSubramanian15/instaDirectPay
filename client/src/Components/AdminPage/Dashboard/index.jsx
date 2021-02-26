import React from "react";
import { Col, Row } from "shards-react";
import "../style.scss";
import { FaUsers } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";
import { CgSync } from "react-icons/cg";
import { VscSyncIgnored } from "react-icons/vsc";
// import DataTable from "./DataTable";

import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
export default function AdminDashboard() {
    const history = useHistory();
    const [cardData, setCardData] = useState(null);
    const [usersData, setusersData] = useState(null);
    const handleAction = (row) => history.push("/admin/" + row._id);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_URL + "/admin/card")
            .then((res) => setCardData(res.data))
            .catch((err) => {
                console.log(err.response);
            });
        axios
            .get(process.env.REACT_APP_URL + "/admin/getusers")
            .then((res) => setusersData(res.data.user))
            .catch((err) => {
                console.log(err.response);
            });
    }, []);
    const data =
        usersData &&
        usersData.map(
            (
                {
                    card_details: { number, isenabled },
                    first_name,
                    last_name,
                    amount,
                    _id,
                    account_number,
                },
                index
            ) => {
                return {
                    id: index + 1,
                    CustomerAccountNo: account_number,
                    Name: first_name + " " + last_name,
                    IsActive: !isenabled ? "Active" : "Inactive",
                    AvailableFund: amount,
                    _id,
                };
            }
        );
    const columns = [
        {
            name: "Customer Account No.",
            selector: "CustomerAccountNo",
            sortable: true,
        },
        { name: "Name", selector: "Name", sortable: true },
        { name: "Is Active", selector: "IsActive", sortable: true },
        {
            name: "Available Fund",
            selector: "AvailableFund",
            sortable: true,
            // cell: (d) => <span>{d.AvailableFund.join(", ")}</span>,
        },
        // { name: "View Details", selector: "ViewDetails", sortable: true },
        {
            name: "View Details",
            cell: (row) => (
                <button className="view" onClick={() => handleAction(row)}>
                    View
                </button>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    // const columns = [
    //     {
    //         name: "Title",
    //         selector: "title",
    //         sortable: true,
    //     },
    //     {
    //         name: "Director",
    //         selector: "director",
    //         sortable: true,
    //     },
    //     {
    //         name: "Genres",
    //         selector: "genres",
    //         sortable: true,
    //         cell: (d) => <span>{d.genres.join(", ")}</span>,
    //     },
    //     {
    //         name: "Year",
    //         selector: "year",
    //         sortable: true,
    //     },
    // {
    //     cell: (row) => (
    //         <button
    //             className="123"
    //             onClick={() => handleAction(row)}
    //         >
    //             Action
    //         </button>
    //     ),
    //     ignoreRowClick: true,
    //     allowOverflow: true,
    //     button: true,
    // },
    // ];

    const datah = [
        {
            id: 1,
            CustomerAccountNo: "Beetlejuice",
            Name: "1988",
            IsActive: "92",
            AvailableFund: ["Comedy", "Fantasy"],
            ViewDetails: "Tim Burton",
            actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
            plot:
                'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
        },
        {
            id: 2,
            CustomerAccountNo: "The Cotton Club",
            Name: "1984",
            IsActive: "127",
            AvailableFund: ["Crime", "Drama", "Music"],
            ViewDetails: "Francis Ford Coppola",
            actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
            plot:
                "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
        },
        {
            id: 3,
            CustomerAccountNo: "The Shawshank Redemption",
            Name: "1994",
            IsActive: "142",
            AvailableFund: ["Crime", "Drama"],
            ViewDetails: "Frank Darabont",
            actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
            plot:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
        },
        {
            id: 4,
            CustomerAccountNo: "Crocodile Dundee",
            Name: "1986",
            IsActive: "97",
            AvailableFund: ["Adventure", "Comedy"],
            ViewDetails: "Peter Faiman",
            actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
            plot:
                "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
        },
        {
            id: 5,
            CustomerAccountNo: "Valkyrie",
            Name: "2008",
            IsActive: "121",
            AvailableFund: ["Drama", "History", "Thriller"],
            ViewDetails: "Bryan Singer",
            actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
            plot:
                "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
            posterUrl:
                "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg",
        },
        {
            id: 6,
            CustomerAccountNo: "Ratatouille",
            Name: "2007",
            IsActive: "111",
            AvailableFund: ["Animation", "Comedy", "Family"],
            ViewDetails: "Brad Bird, Jan Pinkava",
            actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
            plot:
                "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
        },
        {
            id: 7,
            CustomerAccountNo: "City of God",
            Name: "2002",
            IsActive: "130",
            AvailableFund: ["Crime", "Drama"],
            ViewDetails: "Fernando Meirelles, Kátia Lund",
            actors:
                "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
            plot:
                "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
        },
        {
            id: 8,
            CustomerAccountNo: "Memento",
            Name: "2000",
            IsActive: "113",
            AvailableFund: ["Mystery", "Thriller"],
            ViewDetails: "Christopher Nolan",
            actors:
                "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
            plot:
                "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
            id: 9,
            CustomerAccountNo: "The Intouchables",
            Name: "2011",
            IsActive: "112",
            AvailableFund: ["Biography", "Comedy", "Drama"],
            ViewDetails: "Olivier Nakache, Eric Toledano",
            actors: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
            plot:
                "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
            posterUrl:
                "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
        },
        {
            id: 10,
            CustomerAccountNo: "Stardust",
            Name: "2007",
            IsActive: "127",
            AvailableFund: ["Adventure", "Family", "Fantasy"],
            ViewDetails: "Matthew Vaughn",
            actors: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
            plot:
                "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
        },
        {
            id: 11,
            CustomerAccountNo: "Apocalypto",
            Name: "2006",
            IsActive: "139",
            AvailableFund: ["Action", "Adventure", "Drama"],
            ViewDetails: "Mel Gibson",
            actors:
                "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
            plot:
                "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg",
        },
        {
            id: 12,
            CustomerAccountNo: "Taxi Driver",
            Name: "1976",
            IsActive: "113",
            AvailableFund: ["Crime", "Drama"],
            ViewDetails: "Martin Scorsese",
            actors: "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
            plot:
                "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
            id: 13,
            CustomerAccountNo: "No Country for Old Men",
            Name: "2007",
            IsActive: "122",
            AvailableFund: ["Crime", "Drama", "Thriller"],
            ViewDetails: "Ethan Coen, Joel Coen",
            actors:
                "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
            plot:
                "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
        },
        {
            id: 14,
            CustomerAccountNo: "Planet 51",
            Name: "2009",
            IsActive: "91",
            AvailableFund: ["Animation", "Adventure", "Comedy"],
            ViewDetails: "Jorge Blanco, Javier Abad, Marcos Martínez",
            actors: "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
            plot:
                "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
            posterUrl:
                "http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg",
        },
        {
            id: 15,
            CustomerAccountNo: "Looper",
            Name: "2012",
            IsActive: "119",
            AvailableFund: ["Action", "Crime", "Drama"],
            ViewDetails: "Rian Johnson",
            actors:
                "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
            plot:
                "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
            posterUrl:
                "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg",
        },
        {
            id: 16,
            CustomerAccountNo: "Corpse Bride",
            Name: "2005",
            IsActive: "77",
            AvailableFund: ["Animation", "Drama", "Family"],
            ViewDetails: "Tim Burton, Mike Johnson",
            actors:
                "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
            plot:
                "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
            posterUrl:
                "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg",
        },
        {
            id: 17,
            CustomerAccountNo: "The Third Man",
            Name: "1949",
            IsActive: "93",
            AvailableFund: ["Film-Noir", "Mystery", "Thriller"],
            ViewDetails: "Carol Reed",
            actors: "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
            plot:
                "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg",
        },
        {
            id: 18,
            CustomerAccountNo: "The Beach",
            Name: "2000",
            IsActive: "119",
            AvailableFund: ["Adventure", "Drama", "Romance"],
            ViewDetails: "Danny Boyle",
            actors:
                "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
            plot:
                "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
            posterUrl:
                "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
    ];
    const tableData = {
        columns,
        data,
    };
    return (
        <div className="admin">
            <div className="content">
                <Row>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                        <div className="info-card right-top">
                            <span className="icon">
                                <FaUsers />
                            </span>
                            Total Users
                            <div className="value">
                                {cardData && cardData.userCount}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                        <div className="info-card left-bottom">
                            <span className="icon">
                                <RiFundsFill />
                            </span>
                            Fund Transfered
                            <div className="value">
                                {" "}
                                {cardData && cardData.userCount}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                        <div className="info-card right-bottom">
                            <span className="icon">
                                <CgSync />
                            </span>
                            Active Users
                            <div className="value">
                                {" "}
                                {cardData && cardData.activeUsers}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                        <div className="info-card left-top">
                            <span className="icon">
                                <VscSyncIgnored />
                            </span>
                            Suspended Users
                            <div className="value">
                                {" "}
                                {cardData && cardData.suspendedUsers}
                            </div>
                        </div>
                    </Col>
                </Row>
                <h3>User List</h3>
                <div className="data-table">
                    {usersData && (
                        <DataTableExtensions {...tableData}>
                            <DataTable
                                data={data}
                                columns={columns}
                                noHeader
                                defaultSortField="id"
                                defaultSortAsc={false}
                                pagination
                                highlightOnHover
                            />
                        </DataTableExtensions>
                    )}
                </div>
            </div>
        </div>
    );
}
