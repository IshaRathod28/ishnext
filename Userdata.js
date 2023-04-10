import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
// import { useNavigate, link } from 'react-router-dom';
import Navbar from './Navbar'
import ReactPaginate from "react-paginate";
import { CSVLink } from "react-csv";
import Papa from "papaparse";

const Userdata = () => {

    const router = useRouter();
    // const navigate = useNavigate();

    const [userdata, setUserdata] = useState([]);

    const [pagerefresd, setpagerefresd] = useState(false)

    // const [prevpage, setPrevpage] = useState(0);
    //for pagination
    const [length, setLength] = useState(0);
    const [total, setTotal] = useState(0);
    const [curPage, setCurPage] = useState(0);

    //for csv file export and import
    const [csvdata, setCsvdata] = useState([]);
    const [csv2data, setCsv2data] = useState([]);


    // Allowed extensions for input file
    const allowedExtensions = ["csv"];
    const [error, setError] = useState("");
    const [file, setFile] = useState("");

    const [dispstatus, setDispstatus] = useState();

    const headers = [
        { label: "code", key: "code" },
        { label: "name", key: "firstname" },
        { label: "email", key: "email" },
        { label: "gender", key: "gender" },
        { label: "hobbies", key: "hobbies" },
        { label: "status", key: "status" },
        { label: "dateadded", key: "dateadded" },
        { label: "dateupdated", key: "dateupdated" },
    ];

    const DataToCSV = (userdata) => {
        let tempAns = userdata.map((item) => {
            console.log(item);
            const json = {};
            json.code = item.code;
            // json.firstname = item.firstname + "  " + item.lastname;
            json.firstname = item.firstname;
            json.lastname = item.lastname;
            json.email = item.email;
            json.gender = item.gender;
            json.hobbies = item.hobbies;
            json.photo = item.photo;
            json.status = item.status == "A" ? "Active" : "Inactive";
            json.dateadded = item.dateadded;
            json.country = item.country;
            json.dateupdated = item.dateupdated;
            return json;
        });
        setCsvdata(tempAns);
    };

    useEffect(() => {
        showuser();
        console.log(userdata.dispstatus)
        setLength()
    }, []);

    useEffect(() => {
        DataToCSV(userdata);
    }, [userdata])

    useEffect(() => {
        // console.log("fname",csv2data[0].firstname)
        setUserdata(csv2data);
        addToTable();
    }, [csv2data])

    useEffect(() => {
        showuser();
    }, [pagerefresd])


    const addToTable = async (e) => {
        // console.log("fname add table", csv2data[0].firstname)
        // try {
        //   const res = await axios.post("http://localhost:5000/import", {
        //     code: code,
        //     firstname: firstname,
        //     lastname: lastname,
        //     email: email,
        //     gender: gender,
        //     hobbies: hobbies,
        //     photo: ans.data.message,
        //     country: country,
        //   });
        //   console.log(res);
        //   console.log(res.data);
        //   setUserdata(res.data);
        //   navigate("/")
        // } catch (err) {
        //   console.log(err);
        // }
    };



    const handleupdate = (code) => {
        localStorage.setItem("tempcode", code);
        // navigate('/updateuser');
        router.push('/user/Updateuser')
        console.log("update clicked")
    }

    const showuser = async () => {
        try {

            const res = await axios.get("/api/showuser")
            setLength(res.data.length);
            console.log(res.data);
            setUserdata(res.data);
            setTotal(Math.ceil(res.data.length / 3));
            // console.log("userdata", userdata);
            // console.log("leng", length);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        console.log("length", length);
    }, [length])

    //uperna no matlab em ke jyare pan length set karave tyare console thay

    const handledelete = async (code) => {
        try {
            const res = await axios.delete("/api/userdelete", { params: { code } })
            console.log(res.data);
            setpagerefresd(!pagerefresd);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handelstatus = async (code) => {
        try {
            const res = await axios.get("/api/changestatus", { params: { code, dispstatus: dispstatus } })
            console.log("status clicked", dispstatus);
            setpagerefresd(!pagerefresd);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleview = async (code) => {
        localStorage.setItem("tempcode", code);
    //    navigate('/viewuser');
    router.push('/user/Viewuser')
        console.log("update clicked")
    }

    const findImageName = (tData) => {
        console.log(tData);
        if (tData) {
            let ansss = tData.split('/');
            console.log(ansss)
            console.log(ansss.length-1)
            ansss = ansss[ansss.length - 1];
            console.log(ansss)
            return ansss;
        } else {
            return "download.png"
        }
    }

    const changeSubmitData = (tData) => {
        setUserdata(tData)
    }

    const changeSorteddata = (tData) => {
        // console.log("inside",tdata)
        setUserdata(tData)
    }

    const handleFileChange = (e) => {
        setError("");
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];
            // Check the file extensions          
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                return;
            }
            // If input type is correct set the state
            setFile(inputFile);
        }
    };


    

    const handleParse = () => {
        // setFile(e.target.files[0]);
        if (!file) return setError("Enter a valid file");
        // Initialize a reader
        const reader = new FileReader();

        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, {
                header: true,
                skipEmptyLines: true,
                complete: function (results) {
                    console.log("parsed", results.data)
                    setCsv2data(results.data)
                    const importeddata = axios.post("/api/import", results.data);
                    console.log(importeddata);
                },
            });

            // const parsedData = csv?.data;
            // const columns = Object.keys(parsedData[1]);
            // setCsv2data(columns);
        };
        reader.readAsText(file);
    };

    return (
        <>
            <Navbar
                changeSubmitData={changeSubmitData}
                changeSorteddata={changeSorteddata} />
            <div style={{ margin: "10px", display: "flex" }}>
                <span>
                    <CSVLink
                        filename={"Userdata.csv"}
                        class="btn btn-secondary"
                        // headers={headers}
                        data={userdata}>
                        EXPORT DATA
                    </CSVLink>
                </span>
                <span style={{ marginLeft: "15px" }} >
                    <label htmlFor="csvInput" style={{ display: "block" }}>
                        Enter CSV File
                    </label>
                    <input
                        onChange={handleFileChange}
                        id="csvInput"
                        name="file"
                        type="File"
                        accept=".csv"
                    />
                    <button class="btn btn-secondary"
                        onClick={handleParse}
                    >IMPORT</button>
                    <div style={{ color: "red" }}>
                        {error ? (error) : console.log("ok")}
                    </div>
                </span>
            </div>


            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Code </th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>dateadded</th>
                        <th>Country</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>
                            <button
                                class="btn btn-success"
                                style={{ width: "60px" }}
                                onClick={() => {
                                    // navigate("/userform");
                                    router.push('/user/User_form')
                                }}>
                                ADD
                            </button>
                        </th>
                    </tr>
                </thead>
                {userdata ? <> {userdata.slice(curPage * 3, curPage * 3 + 3).map((item, index) => (
                    <tbody>
                        <tr>
                            {console.log(item.photo)}
                            <td>{item.code} </td>
                            <td onClick={()=>{console.log(true)}}
                            >
                                   
                                <img src={`http://localhost:5000/getimage/${findImageName(item.photo)}`}

                                   
                                    style={{ height: "100px" }}
                                     />
                            </td>
                            <td>  {item.firstname} {item.lastname} </td>
                            <td>{item.email} </td>
                            <td> {item.gender}</td>
                            <td> {item.hobbies}</td>
                            <td> {item.dateadded.slice(0, 10)}</td>
                            <td> {item.country}</td>
                            <td>
                                <p
                                    onClick={(e) => {
                                        handelstatus(item.code);
                                        setDispstatus(item.dispstatus);
                                        // console.log(dispstatus)
                                    }}>
                                    {item.dispstatus}
                                </p>
                            </td>
                            <td style={{ display: "flex" }}>
                                {/* <button
                                            className="btn btn-info"
                                            style={{ marginRight: "10px", color: "white" }}
                                            onClick={(e) => {
                                                handleview(udata.code);
                                            }}
                                        >
                                            VIEW
                                        </button> */}

                                <button className="btn btn-info"
                                    style={{ marginRight: "10px", color: "white" }}
                                    onClick={(e) => {
                                        handleview(item.code);
                                    }}
                                >
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                    View</button>

                                {/* <button
                                            className="btn btn-primary"
                                            style={{ marginRight: "10px" }}
                                            onClick={(e) => {
                                                handleupdate(udata.code);
                                            }}
                                        >
                                            UPDATE
                                        </button> */}

                                <button className="btn btn-primary"
                                    style={{ marginRight: "10px" }}
                                    onClick={(e) => {
                                        handleupdate(item.code);
                                    }}
                                >
                                    {/* <i class="fa">&#xf044;</i> */}
                                    Update</button>

                                {/* <button
                                            className="btn btn-danger"
                                            onClick={(e) => {
                                                handledelete(udata.code);
                                            }}
                                        >
                                            DELETE
                                        </button> */}
                                <button className="btn btn-danger"
                                    onClick={(e) => {
                                        handledelete(item.code);
                                    }}
                                >
                                    <i class="fa fa-trash"></i>
                                    Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))
                }</> : null}
            </table>

            <div style={{ justifyContent: "space-between", display: "flex" }}>
                <div>
                    <button 
                    disabled={curPage == 0}
                     style={{ margin: "10px" }}
                        onClick={() => {
                            setCurPage(curPage - 1)
                        }}>Prev</button>
                </div>

                {"Page No: " + (curPage + 1)}

                <div>

                    <button 
                    disabled={(curPage + 1) == total}
                        onClick={() => {
                            setCurPage(curPage + 1)
                            console.log(curPage, total)
                        }}>Next</button>
                </div>
            </div>
        </>
    );
}

export default Userdata
