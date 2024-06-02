import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, FormControl, Button, Card, Row } from "react-bootstrap";
import "../App.css";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase_config";



function Favorites() {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);
    const [albumsList, setAlbumsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const albumsCollectionRef = collection(db, "albums");
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
    useEffect(() => {
        const getDbAlbums = async () => {
            const data = await getDocs(albumsCollectionRef);
            setIsLoading(false);
            setAlbumsList(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        };
        getDbAlbums();
    });
    const deleteDbAlbum = async (id) => {
        const albumDoc = doc(db, "albums", id);
        await deleteDoc(albumDoc);
        console.log(albumDoc);
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
                            const saveAlbums = async () => {
                                await addDoc(albumsCollectionRef, {
                                    name: album.name,
                                    image: album.images[0].url,
                                    artists: album.artists[0].name,
                                    release_date: album.release_date,
                                    total_tracks: album.total_tracks,
                                    author: {
                                        name: auth.currentUser.displayName,
                                        id: auth.currentUser.uid
                                    }
                                })
                                let albumName = JSON.stringify(album.name);
                                alert("Successfully added " + albumName);
                            }
                            return (
                                <Card>
                                    <div className="alb-cont">
                                        <div className="img-size">
                                            <Card.Img fluid src={album.images[0].url} />
                                        </div>
                                        <div className="alb-bod">
                                            <Card.Body>
                                                <Card.Title>{album.name}</Card.Title>
                                                <Card.Text>
                                                    <p><strong>Artist</strong>: {album.artists[0].name}</p>
                                                    <p><strong>Release Date</strong>: {album.release_date}</p>
                                                    <p><strong>Total Tracks</strong>: {album.total_tracks}</p>
                                                </Card.Text>
                                            </Card.Body>
                                            <div className="alb-btn">
                                                <Button variant="success" onClick={saveAlbums}>Add</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })}
                    </Row>
                </Container>
                <Container>
                    <Row className="mx-2 row row-cols-5">
                        {isLoading == true ? (<div>Loading</div>) : 
                        (
                                albumsList.map((album) => {
                                    return (
                                        <Card>
                                            <div className="img-size">
                                                <Card.Img fluid src={album.image} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{album.name}</Card.Title>
                                                <Card.Text>
                                                    <p><strong>Artist</strong>: {album.artists}</p>
                                                    <p><strong>Release Date</strong>: {album.release_date}</p>
                                                    <p><strong>Total Tracks</strong>: {album.total_tracks}</p>
                                                </Card.Text>
                                            </Card.Body>
                                            <Button variant="warning">Edit</Button>
                                            <Button variant="danger" onClick={event => deleteDbAlbum(album.id)}>Remove</Button>
                                        </Card>
                                    )
                                })
                        )}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Favorites;