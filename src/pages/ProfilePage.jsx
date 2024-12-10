import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMemberDetails } from "../services/memberService";
import { AuthContext } from "../context/AuthContext";
import "./profile.css";

const DashboardPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [memberDetails, setMemberDetails] = useState(null);

    useEffect(() => {
        if (!user || user.id !== parseInt(id, 10)) {
            console.error("Unauthorized access to dashboard");
            navigate("/unauthorized");
            return;
        } else {
            console.log("Fetching member details for id:", id);
            fetchMemberDetails(id)
                .then((details) => {
                    console.log("Fetched member details:", details);
                    setMemberDetails(details);
                })
                .catch((error) => {
                    console.error("Error fetching member details:", error);
                });
        }
    }, [id]);

    if (!memberDetails) {
        console.log("Member details not yet loaded");
        return <p>Loading member details...</p>;
    }

    console.log("Rendering DashboardPage with member details:", memberDetails);

    return (
        <div>
            <h1>
                Profile for {memberDetails.firstName} {memberDetails.lastName}
            </h1>
            <h3>Member ID: {id}</h3>
            <p>{memberDetails.bio}</p>
            <p>Joined on: {memberDetails.joinDate}</p>
            <div className="avatar-container">
                <img
                    src={memberDetails.profilePictureUrl}
                    className="avatar"
                    alt="Profile"
                    style={{ borderRadius: "50%" }}
                />
            </div>
        </div>
    );
};

export default DashboardPage;
