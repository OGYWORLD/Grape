import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel, Steps } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import {EditOutlined,LayoutOutlined, FunnelPlotOutlined, GlobalOutlined, StarOutlined, InfoCircleOutlined, CheckCircleOutlined} from '@ant-design/icons'
import Bottom from "./bottom"

function New(){

    const { Step } = Steps;

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [chpw, setChpw] = useState("");
    const [ad, setAd] = useState("");
    const [email, setEmail] = useState("");
    const [current, setCurrent] = useState(0);

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onChangeName = e => {
        setName(e.target.value)
    };

    const onChangeId = e => {
        setId(e.target.value)
    };

    const onChangePw = e => {
        setPw(e.target.value)

    };

    const onChangeChpw = e => {
        setChpw(e.target.value)

    };

    const onChangeEmail = e => {
        setEmail(e.target.value)
    };

    const onChangeAd = e => {
        setAd(e.target.value)

    };

    function onStageName(){
        setCurrent(0);
    }

    function onStageId(){
        setCurrent(1);
    }

    function onStagePw(){
        setCurrent(2);
    }

    function onStageEmail(){
        setCurrent(3);
    }

    function onStageAddr(){
        setCurrent(4);
    }



    const [nkey, setNkey] = useState("create");

    function handleChange(key) {
        setNkey(key.key);
      }

    //GET
    const fetchUsers = async () => {
        try {
        setError(null);
        setUsers(null);
        setLoading(true);

        const response = await axios.get(
            'http://127.0.0.1:8000/api/',
            );
        setUsers(response.data);
        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>?????????..</div>; 
    if (error) return <div>????????? ??????????????????</div>;

    if (!users) return null;



        // POST
        const postUsers = async () => {

            try {
            setError(null);
            setUsers(null);
            setLoading(true);
    
            axios.post('http://127.0.0.1:8000/api/',{
                title: id,
                name: name,
                idid: id,
                pw: pw,
                email: email,
                addr: ad,
                userLevel: 1,
                musical: "0",
                date: "0",
                seat: "0",
            }).then(function(response){
                window.location.href = "https://ogyworld.github.io/Grape/newFin";
            });
            } catch (e) {
            setError(e);
            }
            setLoading(false);
        };


    return(
        <div>
            <div className = "body">
            <Link to="/Grape"><img src = {logo} style = {{width: "187.5px", height: "75px", marginTop: "25px", position:"absolute", }}/></Link>
                <Input className="input" style = {{width: "700px", height: "20px", marginTop: "55px", marginLeft: "210px", position:"absolute", fontSize: "20px", borderColor: "#5A4968"
            , borderWidth: "0 0 2px", outline: "0"}}/>
                <Link to="/Grape/login"><b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute", color: "black"}}> ????????? </b></Link>
                <b style={{fontSize: "15px", marginLeft: "1015px", marginTop: "54px", position:"absolute",}}>|</b>
                <Link to="/Grape/new"><b style={{fontSize: "15px", marginLeft: "1030px", marginTop: "55px", position:"absolute", color: "black"}}> ???????????? </b></Link>
                <br/><br/><br/><br/><br/>

                <Menu mode="horizontal" style={{width: "1140px", borderColor: "#DADADA",  borderWidth: "0 0 4px", fontFamily: "HSSSaemaul", fontSize: "17px", color: "#626262"}}
                onClick={handleChange} >
                    <Link to="/Grape">
                    <Menu.Item key="create" icon={<LayoutOutlined />} style={{marginLeft:"50px", marginRight: "120px", borderWidth: "0 0 4px", color: "#626262"}}>
                    ?????? ?????????
                    </Menu.Item>
                    </Link>
                    <Menu.Item key="ricens" icon={<FunnelPlotOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    ???????????? ?????????
                    </Menu.Item>
                    <Menu.Item key="korea" icon={<GlobalOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    ?????? ?????????
                    </Menu.Item>
                    <Menu.Item key="concert" icon={<StarOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    ????????? / ??????
                    </Menu.Item>
                </Menu>


                <Steps current={current} style= {{width: "1100px", marginTop: "50px"}}>
                    <Step title="?????? ??????" />
                    <Step title="????????? ??????" />
                    <Step title="???????????? ??????"/>
                    <Step title="????????? ??????" />
                    <Step title="?????? ??????"/>
                </Steps>
                
                <b style = {{paddingTop: "40px", fontSize: "25px", paddingLeft: "230px", position:"absolute"}}><EditOutlined /> ????????????</b>

                <div style = {{paddingLeft: "300px", paddingTop: "140px"}}>
                <b style = {{fontSize: "20px", marginRight: "100px"}}>?????? </b>
                <Input placeholder="??????"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeName} onClick={onStageName}/>
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "20px"}}>
                <b style = {{fontSize: "20px", marginRight: "80px"}}>????????? </b>
                <Input placeholder="?????????"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeId} onClick={onStageId}/>
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "20px"}}>
                <b style = {{fontSize: "20px", marginRight: "60px"}}>???????????? </b>
                <Input.Password placeholder="????????????"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangePw} onClick={onStagePw}/>
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "20px"}}>
                <b style = {{fontSize: "20px", marginRight: "20px"}}>???????????? ??????</b>
                <Input.Password placeholder="???????????? ??????"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeChpw} onClick={onStagePw}/>
                <br/>
                {
                    (pw != chpw) &&
                    (chpw.length != 0) &&
                    (<b style={{marginTop: "10px", position:"absolute", color: "#CD3131"}}><InfoCircleOutlined /> ??????????????? ???????????? ????????????.</b>)
                }

{
                    (pw == chpw) &&
                    (chpw.length != 0) &&
                    (<b style={{marginTop: "10px", position:"absolute", color: "#229A44"}}><CheckCircleOutlined /> ??????????????? ???????????????.</b>)
                }
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "70px"}}>
                <b style = {{fontSize: "20px", marginRight: "80px"}}>????????? </b>
                <Input placeholder="?????????"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeEmail} onClick={onStageEmail}/>
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "20px"}}>
                <b style = {{fontSize: "20px", marginRight: "55px"}}>?????? ?????? </b>
                <Input placeholder="?????? ??????"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeAd} onClick={onStageAddr}/>
                </div>

                {
                    (id.length == 0 || pw.length == 0 || chpw.length == 0 || email.length == 0 || ad.length == 0) &&
                    (<Button style = {{marginLeft: "300px", marginTop: "70px", width: "500px", height: "60px"}} disabled >???????????? ??????</Button>)
                }

{
                    (id.length != 0 && pw.length != 0 && chpw.length != 0 && email.length != 0 && ad.length != 0) &&
                    (<>
                    <Button style = {{marginLeft: "300px", marginTop: "70px", width: "500px", height: "60px", backgroundColor: "#5B3291", color: "white"}} onClick={ () => {postUsers()} }>???????????? ??????</Button>
                    </>)
                }

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>

            <Bottom/>
        </div>
    );
}

export default New;
