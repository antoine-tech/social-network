import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiEngine from "../../service/ApiEngine";
import Cookies from 'js-cookie'
import CardPost from "../CardPost";
import * as helperDates from "../../helpers/parseDate"
import { Link } from "react-router-dom";


const UserProfile = (props) => {

    const { id: userId } = useParams();

    const [userDatas, setUserDatas] = useState({});

    const [userPostsDatas, setUserPostsDatas] = useState([]);


    useEffect(() => {

        const fetchDatas = async () => {

            let jwt_token = Cookies.get("jwt");

            const API_ENGINE = new ApiEngine();

            let userDatasResponse = await API_ENGINE.find(`/users/${userId}`, true, jwt_token);

            let userPostsDatasResponse = await API_ENGINE.find(`/posts?user.id=${userId}`, true, jwt_token);


            setUserDatas(userDatasResponse);

            setUserPostsDatas(userPostsDatasResponse);

        }

        fetchDatas()

    }, [0]);

    return (

        <div className="row col-12 bg-primary-color">


            <div className="col-12 col-lg-6 py-5 px-0" id="feed-container-profile">

                <div className="row col-12 px-4 d-flex align-items-center justify-content-center">

                    <h1 className="my-4 text-white text-center">{userDatas.username} - <small className="font-italic text-white">{userPostsDatas.length} Posts</small></h1>

                </div>

                <div className="row col-12 px-4 d-flex align-items-center justify-content-center">
                    <h5 className="font-italic text-white">Membre depuis le {helperDates.parseDate(userDatas.created_at)}</h5>
                </div>

                <div className="overflow-auto">

                    {
                        userPostsDatas.map((e) => {
                            console.log(e)
                            let { id, like, created_at, updated_at, user, text } = e;
                            return <CardPost key={id} id={id} author={user} like={like} text={text} created_at={created_at} updated_at={updated_at} />
                        })
                    }


                </div>




            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center" id="feed-container-buttons">

                <div className="w-100">
                    <Link to="/" className="btn-secondary-color waves-effect waves-light btn-large col-md-9 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center mx-auto">CONTACTER</Link>


                    <Link to="/wall" className="btn-secondary-color waves-effect waves-light btn-large col-md-9 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center mx-auto">PUBLIER </Link>


                    <Link to="/account" className="btn-secondary-color waves-effect waves-light btn-large col-md-9 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center mx-auto">MON COMPTE</Link>

                </div>
            </div>




        </div>
    )
}


export default UserProfile

