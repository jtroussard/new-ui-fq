import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMemberDetails } from "../services/memberService";
import { AuthContext } from "../context/AuthContext";

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
      <h2>Member Overview</h2>
      <div className="row g-3">
        <div className="col-12">
            <ul>
            <li>Small tiles summerizing each domains status</li>
            <li>Small tiles summerizing member related stats (visits, totla entries, etc)</li>
            <li>Ai suggestion tile</li>
            <li>Main chart plotting weight, or goals</li>
            </ul>
        </div>
      </div>
    </div>
    );
};

export default DashboardPage;
