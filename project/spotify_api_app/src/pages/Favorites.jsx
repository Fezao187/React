import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Card, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../App.css";

function Favorites() {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        let authParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials&client_id=" + cilentID + "&client_secret=" + clientSecret
        }
        fetch("https://accounts.spotify.com/api/token", authParams)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    const searchAlbums = async () => {
        let artistParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        }
        let getArtistID = await fetch("https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist", artistParams)
            .then(res => res.json())
            .then(data => { return data.artists.items[0].id })
        let getAlbums = await fetch("https://api.spotify.com/v1/artists/" + getArtistID + "/albums" + "?include_groups=album&market=US&limit=50", artistParams)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAlbums(data.items);
            }) || [];
    }
    return (
        <>
            <div>
                <Container>
                    <InputGroup className="mb-3" size="lg">
                        <FormControl
                            placeholder="Search for artist"
                            type="input"
                            onKeyPress={event => {
                                if (event.key == "Enter") {
                                    searchAlbums();
                                }
                            }}
                            onChange={event => setSearchInput(event.target.value)}
                        />
                        <Button onClick={searchAlbums}>Search</Button>
                        <Button onClick={event => console.log("Clear")}>Clear</Button>
                    </InputGroup>
                </Container>
                <Container>
                    <Row className="mx-2 row row-cols-1">
                        {console.log(albums)}
                        {albums.map((album, i) => {
                            return (
                                <Card>
                                    <div className="img-size">
                                    <Card.Img fluid src={album.images[0].url} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{album.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Favorites;