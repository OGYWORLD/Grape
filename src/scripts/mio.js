import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Card, Tabs, Menu, Descriptions, Checkbox, notification, Button, Modal, Tooltip, message} from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import {LayoutOutlined, FunnelPlotOutlined, GlobalOutlined, StarOutlined, CaretLeftOutlined, CaretRightOutlined, CheckCircleOutlined, PlusCircleOutlined} from '@ant-design/icons'
import Bottom from "./bottom"
import mio from "../image/ad.jpg"
import mio_notice1 from "../image/mio_notice1.jpg"
import mio_notice2 from "../image/mio_notice2.jpg"
import mio_sale1 from "../image/mio_sale1.jpg"
import mio_sale2 from "../image/mio_sale2.jpg"
import mio_sale3 from "../image/mio_sale3.jpg"
import mio_sale4 from "../image/mio_sale4.jpg"
import mio_sale5 from "../image/mio_sale5.jpg"
import mio_cast from "../image/mio_cast.jpg"


function Mio(){

    const [checkNum, setCheckNum] = useState(0);
    const [least, setLeast] = useState(0);

    const [a1, setA1] = useState(0);
    const [a2, setA2] = useState(0);
    const [a3, setA3] = useState(0);
    const [a4, setA4] = useState(0);
    const [count, setCount] = useState(0);

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [users, setUsers] = useState(null);
    const [seat, setSeat] = useState(null);
    
    const [loading2, setLoading2] = useState(false);
    const [error2, setError2] = useState(null);


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [nkey, setNkey] = useState("create");
    const [bottomKey, setBottomKey] = useState(1);
    const [dateCast, setDateCast] = useState(0);
    const [seatNum, setSeatNum] = useState("");

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

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
    

        //GET
        const fetchUsersMio = async () => {
            try {
            setError2(null);
            setSeat(null);
            setLoading2(true);
            
            const response = await axios.get(
                'http://127.0.0.1:8001/api/',
                );
            setSeat(response.data);
            } catch (e) {
            setError2(e);
            }
            setLoading2(false);
            };
            
            
            useEffect(() => {
                fetchUsersMio();
            }, []);
            
            
            if (loading2) return <div>?????????..</div>; 
            if (error2) return <div>????????? ??????????????????</div>;
            
            if (!seat) return null; 

    // POST
    const postUsers = async () => {

    try {
    setError(null);
    setUsers(null);
    setLoading(true);

    axios.post('http://127.0.0.1:8000/api/',{
        title: users[users.length-1].id,
        name: users[users.length-1].name,
        idid: users[users.length-1].idid,
        pw: users[users.length-1].pw,
        email: users[users.length-1].email,
        addr: users[users.length-1].addr,
        userLevel: 1,
        musical: "?????? ????????????",
        date: "2022??? 5??? 29??? 1?????? 14:00 ??????",
        seat: seatNum,
    }).then(function(response){
        message.info('?????????????????????.');
    });
    } catch (e) {
    setError(e);
    }
    setLoading(false);
    };

    const postUsersSeat = async () => {

        try {
        setError(null);
        setUsers(null);
        setLoading(true);
    
        axios.post('http://127.0.0.1:8001/api/',{
            a1: a1,
            a2: a2,
            a3: a3,
            a4: a4,
            count: count,
            
        }).then(function(response){
            window.location.href = "https://ogyworld.github.io/Grape/mypage";
            message.info('?????????????????????.');
        });
        } catch (e) {
        setError(e);
        }
        setLoading(false);
        };


        // POST
        const postUsersLogout = async () => {

            try {
            setError(null);
            setUsers(null);
            setLoading(true);
    
            axios.post('http://127.0.0.1:8000/api/',{
                title: -1,
                userLevel: 0,
            }).then(function(response){
                window.location.href = "https://ogyworld.github.io/Grape";
            });
            } catch (e) {
            setError(e);
            }
            setLoading(false);
        };

    function onChange(e) {
        setCheckNum(1);
      }

    const openNotification = placement => {
        notification.info({
          message: `?????? ??????`,
          description:
          <>
            <b style={{color: "#C62323"}}>??????????????? ???????????? ?????? ????????? ??????/????????? ????????? ???????????????.</b><br/>
            <b>-?????? ??????/??????, ????????????, ??????, ????????? ?????? ?????? ???????????? ????????? ???????????? ????????? ?????????, ?????? ????????? ?????? ?????? ????????? ??????/??????/????????? ???????????????.</b>
            <br/><br/>
            <li style={{color: "#C62323"}}>?????? 13??? ?????? ????????????, ????????????????????? ????????????/???????????????????????? ???????????? ??????????????? ???????????????.</li>
            <li>(2022??? ?????? 2009?????? ?????? ?????? ?????????)</li>
            <li>-?????? ?????? ??? ???????????? ????????? ????????? ????????????(???????????????, ??????, ?????????????????? ???)??? ????????? ??????????????? ????????????.</li>
            <br/><br/>
            <li>????????? ?????? ????????? ????????? ??????, ???????????????????????? ???????????? ?????????????????? ??????????????????.</li>
            <br/><br/>
            <li style={{color: "#C62323"}}>????????? ?????? ????????? ????????? ???????????? ????????? ???????????????.</li>
            <li>?????? ????????? ????????? ????????? ?????? ???????????? ???????????? ????????? ?????? ????????? ?????? ???????????? ???????????? ?????????. ????????? ?????? ???????????? ???????????? 
                ?????????????????? ????????? ????????? ????????? ?????? ????????? ????????? ??? ????????????. ??????????????? ?????? ????????? ????????? ?????? ??? ?????? ??? ?????? ???????????????, ?????? ?????? ??????/??????/????????? ???????????? ?????? ?????? ????????? ???????????? ????????? ????????????.</li>
            <br/><br/><br/>
            <li>?????? ???????????? ????????? ??????????????? ????????????. ????????? ????????? ?????? ?????? ??? ????????? ???????????? ?????????, ????????? ??????????????? ?????? ??????????????????.</li>
            <br/><br/><br/>
            <hr/>
            
            <Checkbox onClick={onChange} style={{marginLeft: "500px"}}>???????????? ?????? ??????</Checkbox>
          </>,
          placement,
          duration: 0,
          style : { width: "750px", height: "700px"},
        });
      };

    function handleDateCast29() {
        setDateCast(29);
    }

    function handleDateCast31() {
        setDateCast(31);
    }

    function handleChange(key) {
        setNkey(key.key);
      }

      const { TabPane } = Tabs;

    function callback(key) {
        setBottomKey(key);
        setCheckNum(key);
    }

    function setSeatNumA1(){
        setSeatNum("A1");
        setA1(1);
        setA2(seat[seat.length-1].a2);
        setA3(seat[seat.length-1].a3);
        setA4(seat[seat.length-1].a4);
        setCount(seat[seat.length-1].count-1);
    }

    function setSeatNumA2(){
        setSeatNum("A2");
        setA2(1);
        setA1(seat[seat.length-1].a1);
        setA3(seat[seat.length-1].a3);
        setA4(seat[seat.length-1].a4);
        setCount(seat[seat.length-1].count-1);

    }

    function setSeatNumA3(){
        setSeatNum("A3");
        setA3(1);
        setA1(seat[seat.length-1].a1);
        setA2(seat[seat.length-1].a2);
        setA4(seat[seat.length-1].a4);
        setCount(seat[seat.length-1].count-1);

    }

    function setSeatNumA4(){
        setSeatNum("A4");
        setA4(1);
        setA1(seat[seat.length-1].a1);
        setA2(seat[seat.length-1].a2);
        setA3(seat[seat.length-1].a3);
        setCount(seat[seat.length-1].count-1);

    }

    function setSeatNumA5(){
        setSeatNum("A5")
    }

    function setSeatNumA6(){
        setSeatNum("A6")
    }

    function setSeatNumA7(){
        setSeatNum("A7")
    }

    function setSeatNumA8(){
        setSeatNum("A8")
    }

    function setSeatNumA9(){
        setSeatNum("A9")
    }

    var i = 0;
    function leastSeat() {
        for(i = 0; i < 4; i++){
            console.log("sdfsd");
            if(seat[seat.length-1].a`i` == 0){
                console.log("sdfsd");
                setLeast(least+1);
            }
        }


    }

    return(
        <div>
            {(checkNum == 0) &&
            (openNotification('top'))}

            <div className = "body">
            {leastSeat}
            <Link to="/Grape"><img src = {logo} style = {{width: "187.5px", height: "75px", marginTop: "25px", position:"absolute", }}/></Link>
                <Input className="input" style = {{width: "700px", height: "20px", marginTop: "55px", marginLeft: "210px", position:"absolute", fontSize: "20px", borderColor: "#5A4968"
            , borderWidth: "0 0 2px", outline: "0"}}/>
            {
                (users[users.length-1].userLevel != 1) &&
                (<>
                <Link to="/Grape/login"><b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute", color: "black"}}> ????????? </b></Link>
                <b style={{fontSize: "15px", marginLeft: "1015px", marginTop: "54px", position:"absolute",}}>|</b>
                <Link to="/Grape/new"><b style={{fontSize: "15px", marginLeft: "1030px", marginTop: "55px", position:"absolute", color: "black"}}> ???????????? </b></Link>
                </>)
            }

            {
                (users[users.length-1].userLevel == 1) &&
                (<>
                <b style={{fontSize: "15px", marginLeft: "950px", marginTop: "30px", position:"absolute", color: "#8B64BE"}}><CheckCircleOutlined /> ??????????????? {users[users.length-1].name}???!</b>
                <Link to="/Grape/mypage"><b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute", color: "black"}}> ??????????????? </b></Link>
                <b style={{fontSize: "15px", marginLeft: "1035px", marginTop: "54px", position:"absolute",}}>|</b>
                <Link to="/Grape"><b style={{fontSize: "15px", marginLeft: "1050px", marginTop: "55px", position:"absolute", color: "black"}} onClick={ () => {postUsersLogout()} }> ???????????? </b></Link>
                </>)
            }
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

                <br/><br/><br/>

                <b style = {{fontSize: "25px", position:"absolute"}}>[??????] ?????? ????????????</b>
                <b style = {{fontSize: "15px", color: "#717171", marginLeft: "20px", position:"absolute", marginLeft: "250px", marginTop: "10px"}} >?????????????????? 1???</b>
                <img src = {mio} style = {{width: "280px", position:"absolute", marginTop: "65px"}}/>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "60px"}}>??????</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "90px"}}>?????????????????? 1???</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "130px"}}>????????????</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "160px"}}>2022.03.08 ~2022.06.19</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "210px"}}>????????????</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "240px"}}>100???</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "290px"}}>????????????</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "320px"}}>??????????????? ?????????</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "370px"}}>??????</b>
                <p style = {{fontSize: "15px", position:"absolute", marginLeft: "350px", marginTop: "400px"}}>R??? 66,000??? S??? 44,000???</p>
                <p style = {{fontSize: "15px", position:"absolute", marginLeft: "350px", marginTop: "423px"}}>R1??? 66,000??? S1??? 44,000???</p>


                <Card style={{ width: "400px", height: "780px" , marginLeft: "730px", marginTop: "50px", borderRadius: "16px", boxShadow: "1px 1px 1px 2px #D6CDE1"}}>
                    <Button shape="circle" icon={<CaretLeftOutlined />} disabled style={{ position:"absolute"}}/>
                    <b style= {{fontSize: "25px", marginLeft: "150px", position:"absolute"}}>5???</b>
                    <Button shape="circle" icon={<CaretRightOutlined />} disabled style={{marginLeft: "310px", position:"absolute"}}/>

                    <div style={{marginTop: "40px"}}>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "10px", position:"absolute"}}>???</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "60px", position:"absolute"}}>???</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "110px", position:"absolute"}}>???</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "160px", position:"absolute"}}>???</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "210px", position:"absolute"}}>???</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "260px", position:"absolute"}}>???</p>
                    <p style={{fontSize: "15px", marginTop: "15px", marginLeft: "310px", position:"absolute"}}>???</p>
                    </div>

                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute"}} disabled>1</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>2</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute"}} disabled>3</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "153px", position:"absolute"}} disabled>4</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "203px", position:"absolute"}} disabled>5</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "253px", position:"absolute"}} disabled>6</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "303px", position:"absolute"}} disabled>7</Button>

                    <div style={{marginTop: "100px"}}>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute"}} disabled>8</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>9</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute"}} disabled>10</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "153px", position:"absolute"}} disabled>11</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "203px", position:"absolute"}} disabled>12</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "253px", position:"absolute"}} disabled>13</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "303px", position:"absolute"}} disabled>14</Button>
                    </div>

                    <div style={{marginTop: "160px"}}>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute"}} disabled>15</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>16</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute"}} disabled>17</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "153px", position:"absolute"}} disabled>18</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "203px", position:"absolute"}} disabled>19</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "253px", position:"absolute"}} disabled>20</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "303px", position:"absolute"}} disabled>21</Button>
                    </div>

                    <div style={{marginTop: "220px"}}>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute"}} disabled>22</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>23</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute"}} disabled>24</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "153px", position:"absolute"}} disabled>25</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "203px", position:"absolute"}} disabled>26</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "253px", position:"absolute"}} disabled>27</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "303px", position:"absolute"}} disabled>28</Button>
                    </div>

                    <div style={{marginTop: "280px"}}>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "3px", position:"absolute", background: "#5B3291", color: "white"}} onClick={handleDateCast29}>29</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "53px", position:"absolute"}} disabled>30</Button>
                    <Button shape="circle" style={{marginTop: "60px", marginLeft: "103px", position:"absolute", background: "#5B3291", color: "white"}} onClick={handleDateCast31}>31</Button>
                    </div>

                    <hr style={{marginTop: "400px"}}/>

                    {   (dateCast == 29) &&
                        (<>
                        <b style={{fontSize: "17px", marginLeft: "5px"}}>??????</b>
                        <Tabs defaultActiveKey="1" type="card" style={{marginLeft: "5px", marginTop: "10px"}}>
                            <TabPane tab="1??? 14:00" key="1" style={{marginLeft: "0px", marginTop: "10px"}}>
                            <li style={{marginLeft: "10px"}}>R???: {seat[seat.length-1].count}</li>
                            <hr style={{marginTop: "20px"}}/>
                            <b style={{fontSize: "17px", marginLeft: "5px"}}>?????????</b>
                            <p style={{fontSize: "15px", marginLeft: "5px", marginTop: "10px"}}>?????????, ??????, ?????????</p>
                            {
                                (users[users.length-1].userLevel == 1) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", color: "white", background: "#5B3291", borderRadius: "16px"}} onClick={showModal}><b>????????????</b></Button>)
                            }
                            {
                                (users[users.length-1].userLevel == 0) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", borderRadius: "16px"}} onClick={showModal} disabled><b>????????? ??? ??????????????????</b></Button>)
                            }
                            </TabPane>
                            <TabPane tab="2??? 18:00" key="2" style={{marginLeft: "0px", marginTop: "10px"}}>
                            <li style={{marginLeft: "10px", }}>R???: ??????</li>
                            <hr style={{marginTop: "20px"}}/>
                            <b style={{fontSize: "17px", marginLeft: "5px"}}>?????????</b>
                            <p style={{fontSize: "15px", marginLeft: "5px", marginTop: "10px"}}>?????????, ?????????, ?????????</p>
                            {
                                (users[users.length-1].userLevel == 1) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", color: "white", background: "#5B3291", borderRadius: "16px"}}><b>????????????</b></Button>)
                            }
                            {
                                (users[users.length-1].userLevel == 0) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", borderRadius: "16px"}} onClick={showModal} disabled><b>????????? ??? ??????????????????</b></Button>)
                            }
                            </TabPane>
                        </Tabs>

                        </>) 
                    }

                    {   (dateCast == 31) &&
                        (<>
                        <b style={{fontSize: "17px", marginLeft: "5px"}}>??????</b>
                        <Tabs defaultActiveKey="1" type="card" style={{marginLeft: "5px", marginTop: "10px"}}>
                            <TabPane tab="1??? 14:00" key="1" style={{marginLeft: "0px", marginTop: "10px"}}>
                            <li style={{marginLeft: "10px"}}>R???: 13</li>
                            <hr style={{marginTop: "20px"}}/>
                            <b style={{fontSize: "17px", marginLeft: "5px"}}>?????????</b>
                            <p style={{fontSize: "15px", marginLeft: "5px", marginTop: "10px"}}>?????????, ?????????, ?????????</p>
                            {
                                (users[users.length-1].userLevel == 1) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", color: "white", background: "#5B3291", borderRadius: "16px"}}><b>????????????</b></Button>)
                            }
                            {
                                (users[users.length-1].userLevel == 0) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", borderRadius: "16px"}} disabled><b>????????? ??? ??????????????????</b></Button>)
                            }
                            </TabPane>
                            <TabPane tab="2??? 18:00" key="2" style={{marginLeft: "0px", marginTop: "10px"}}>
                            <li style={{marginLeft: "10px", }}>R???: 21</li>
                            <hr style={{marginTop: "20px"}}/>
                            <b style={{fontSize: "17px", marginLeft: "5px"}}>?????????</b>
                            <p style={{fontSize: "15px", marginLeft: "5px", marginTop: "10px"}}>?????????, ?????????, ?????????</p>
                            {
                                (users[users.length-1].userLevel == 1) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", color: "white", background: "#5B3291", borderRadius: "16px"}}><b>????????????</b></Button>)
                            }
                            {
                                (users[users.length-1].userLevel == 0) &&
                                (<Button style={{width: "340px", height: "80px", fontSize:"18px", borderRadius: "16px"}} disabled><b>????????? ??? ??????????????????</b></Button>)
                            }
                            </TabPane>
                        </Tabs>

                        </>) 
                    }
                </Card>


                <Tabs defaultActiveKey="1" onChange={callback} style = {{position:"absolute", marginTop: "00px", width: "1140px", borderBottom: "3px"}} size="large">
                    <TabPane tab="????????????" key="1">

                    <b style = {{fontSize: "20px", marginTop: "40px", position:"absolute"}}>???????????? ??????</b>
                    <li style = {{fontSize: "15px", marginTop: "80px"}}>??????????????????: ?????? 2?????? ?????????</li>
                    <li style = {{fontSize: "15px", marginTop: "30px"}}>???,???,??? 8??? / ??? 4???, 8??? / ??? 3???, 7??? / ??? ??? ????????? 2???, 6??? (????????? ?????? ??????)</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>???, 5??? 26???(???) 4???, 8??? / 6??? 1???(???) 2???, 6??? / 6??? 6???(???) 2???, 6??? (6??? 7???(???) ???)</li>

                    <b style = {{fontSize: "20px", marginTop: "100px", position:"absolute"}}>????????????</b>
                    <li style = {{fontSize: "15px", marginTop: "140px"}}>* ????????? ?????? ?????? ?????? : 1??? ID??? ????????? 2????????? ?????? ???????????????.</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>* ?????? ????????? ?????? ???????????? ????????? ?????? ????????? ?????? ??????????????? ????????? ??? ????????????.</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>* ???????????? ?????? ????????? ??? ?????? ???????????????.</li>
                    
                    <img src = {mio_notice1} style = {{width: "800px", marginTop: "25px", position:"absolute", }}/>
                    <img src = {mio_notice2} style = {{width: "800px", marginTop: "1580px", position:"absolute", }}/>


                <b style = {{fontSize: "20px", marginTop: "3050px", position:"absolute"}}>????????????</b>
                <img src = {mio_sale1} style = {{width: "800px", marginTop: "3100px", position:"absolute", }}/>
                <img src = {mio_sale2} style = {{width: "800px", marginTop: "3920px", position:"absolute", }}/>
                <img src = {mio_sale3} style = {{width: "800px", marginTop: "4740px", position:"absolute", }}/>
                <img src = {mio_sale4} style = {{width: "800px", marginTop: "5580px", position:"absolute", }}/>
                <img src = {mio_sale5} style = {{width: "800px", marginTop: "6800px", position:"absolute", }}/>


                <b style = {{fontSize: "20px", marginTop: "8400px", position:"absolute"}}>???????????? / ???????????????</b>
                <img src = {mio_cast} style = {{width: "800px", marginTop: "8450px", position:"absolute"}}/>
                    </TabPane>
                

                    <TabPane tab="????????????" key="2">
                    <b style = {{fontSize: "20px", marginTop: "40px", position:"absolute"}}>????????? ??????</b>
                    <li style = {{fontSize: "15px", marginTop: "80px"}}>??????: (???)??????????????????</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>???????????????: ????????????</li>
                    <li style = {{fontSize: "15px", marginTop: "0px"}}>??????: ??????????????? 1577-3363</li>

                    <b style = {{fontSize: "20px", marginTop: "100px", position:"absolute"}}>???????????? ??????</b>
                    

                    <Descriptions title="" bordered style={{marginTop: "150px"}}>
                        <Descriptions.Item label="??????/??????">	???????????? ??????????????????</Descriptions.Item>
                        <Descriptions.Item label="????????????">1234-5678</Descriptions.Item>
                        <Descriptions.Item label="????????????">100???</Descriptions.Item>
                        <Descriptions.Item label="????????????">??????????????? ?????????</Descriptions.Item>
                        <Descriptions.Item label="??????" span={2}>
                        ?????????, ?????????, ?????????, ?????????, ?????????, ?????????, ?????????, ??????, ?????????, ?????????, ?????????, ?????????
                        </Descriptions.Item>
                        <Descriptions.Item label="????????????">?????????????????? 1???</Descriptions.Item>
                        <Descriptions.Item label="???????????????">?????? 1,000???</Descriptions.Item>
                        <Descriptions.Item label="?????????">???????????? ?????? (????????????)</Descriptions.Item>
                        <Descriptions.Item label="????????????/????????????" span={3}>
                        2022.03.08~2022.06.19 ????????? ?????? ??????, ????????? ?????? ????????????
                        </Descriptions.Item>
                        <Descriptions.Item label="??????????????????" span={3}>
                        ??????????????? ????????? ????????? ?????? ?????????????????? ???????????????.?????? ??? ???????????? ????????? ????????? ?????? ???????????????. ???, ?????? ?????? ??? 12??? ?????? ?????? ????????? ?????????????????? ?????????, ?????? ???????????? ???????????????.(???????????? ?????? ??????)
                        <br/><br/>
                        <Descriptions title="" layout="vertical" bordered>
                            <Descriptions.Item label="?????????">
                                ?????? ??? 7??? ??????<br/>
                                ?????? ??? 8???~????????? 10????????????<br/>
                                ????????? 9??????~7????????????<br/>
                                ????????? 6??????~3????????????<br/>
                                ????????? 2??????~1????????????<br/>
                            </Descriptions.Item>
                            <Descriptions.Item label="???????????????">
                                ??????<br/>
                                ?????? 4,000???(??????????????? 10%??????)<br/>
                                ??????????????? 10%<br/>
                                ??????????????? 20%<br/>
                                ??????????????? 30%<br/>
                            </Descriptions.Item>
                        </Descriptions>
                        </Descriptions.Item>
                        
                        <Descriptions.Item label="??????????????????" span={3}>
                        - ??????/?????????????????? ?????? ?????? ?????? ???????????? (1234-5678)??? ????????? ????????? ????????? ??? ????????????.<br/>
                        - ????????? ????????? ???????????? ????????? ????????? ?????????, ???????????? ?????? ????????? ????????? ????????? ?????? ??????????????? ??????????????? ?????? ???????????????. ?????????????????? ???????????? ???????????? ????????????, ???????????? ???????????? ????????????.
                        </Descriptions.Item>
                    </Descriptions>

                    </TabPane>
                </Tabs>

                <Modal title="???????????????" visible={isModalVisible} onOk={ () => {postUsers(); postUsersSeat()} } onCancel={handleCancel} bodyStyle={{height: 1000}} width={1000} okText="????????????" cancelText="??????">
                    <b style={{fontSize: "20px"}}>?????? ???????????? 2022??? 5??? 29??? 1?????? 14:00 ??????</b>

                    <Tooltip placement="bottom" title={<b>
                        <div style = {{backgroundColor: '#5B3291', width: '20px', height: '20px', marginTop: "0px", position:"absolute", paddingRight: "20px"}}></div>
                        ..... R??? 66000???<br/>
                        <div style = {{backgroundColor: '#32913B', width: '20px', height: '20px', marginTop: "0px", position:"absolute", paddingRight: "20px"}}></div>
                        ..... S??? 44000???
                        </b>}>
                        <Button style={{marginLeft: "20px"}}>?????? ??????</Button>
                    </Tooltip>

                    <Card style={{ width: 950, marginTop: "50px", height: "700px", backgroundColor: '#76707D'}}>
                        <b style= {{fontSize: "50px", color: "white", marginLeft: "370px", marginBottom: "20px"}}>STAGE</b>
                        <hr/>
                        
                        <div style={{marginTop: "20px", position:"absolute", marginLeft: "0px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "10px"}}>A</b>
                        {
                            (seat[seat.length-1].a1 == 0) &&
                            (<Button style={{width: "5px", backgroundColor: "#5B3291"}} onClick={setSeatNumA1}> </Button>)
                        }
                        {
                            (seat[seat.length-1].a1 == 1) &&
                            (<Button style={{width: "5px", backgroundColor: "white"}} onClick={setSeatNumA1} disabled> </Button>)
                        }

                        {
                            (seat[seat.length-1].a2 == 0) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "#5B3291"}} onClick={setSeatNumA2}> </Button>)
                        }
                        {
                            (seat[seat.length-1].a2 == 1) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} onClick={setSeatNumA2} disabled> </Button>)
                        }

                        {
                            (seat[seat.length-1].a3 == 0) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "#5B3291"}} onClick={setSeatNumA3}> </Button>)
                        }
                        {
                            (seat[seat.length-1].a3 == 1) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor:"white"}} onClick={setSeatNumA3} disabled> </Button>)
                        }

                        {
                            (seat[seat.length-1].a4 == 0) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "#5B3291"}} onClick={setSeatNumA4}> </Button>)
                        }
                        {
                            (seat[seat.length-1].a4 == 1) &&
                            (<Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} onClick={setSeatNumA4} disabled> </Button>)
                        }

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>



                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "2px"}}>B</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "2px"}}>C</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "0px"}}>D</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "4px"}}>E</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "4px"}}>F</b>

                        <Button style={{width: "5px", marginLeft: "218px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "0px"}}>G</b>

                        <Button style={{width: "5px", marginLeft: "137px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "0px"}}>H</b>

                        <Button style={{width: "5px", marginLeft: "137px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "8px"}}>I</b>

                        <Button style={{width: "5px", marginLeft: "137px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "6px"}}>J</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "2px"}}>K</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        <div style={{marginTop: "10px"}}>
                        <b style={{fontSize: "20px", color: "white", marginRight: "5px"}}>L</b>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>

                        <Button style={{width: "5px", marginLeft: "50px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        <Button style={{width: "5px", marginLeft: "10px", backgroundColor: "white"}} disabled> </Button>
                        </div>

                        </div>
                    </Card>
                    <hr/>
                    <Card style={{ width: 950, marginTop: "0px", height: "170px", backgroundColor: '#383240'}}>
                    <b style={{fontSize: "20px", color: "#E6D0FF", zIndex: "2"}}><PlusCircleOutlined /> ????????? ??????</b>
                    <br/><br/>
                    {
                        (seatNum == "A1") && 
                        (<b style={{fontSize: "20px", marginLeft: "10px",  color: "white"}}>A??? 1??? ??????</b>)
                    }

                    {
                        (seatNum == "A2") && 
                        (<b style={{fontSize: "20px", marginLeft: "10px",  color: "white"}}>A??? 2??? ??????</b>)
                    }

                    {
                        (seatNum == "A3") && 
                        (<b style={{fontSize: "20px", marginLeft: "10px",  color: "white"}}>A??? 3??? ??????</b>)
                    }

                    {
                        (seatNum == "A4") && 
                        (<b style={{fontSize: "20px", marginLeft: "10px",  color: "white"}}>A??? 4??? ??????</b>)
                    }
                    </Card>
                </Modal>
                            
            </div>
            {
                (bottomKey=="1") &&
                ( <div style={{marginTop: "16500px"}}>
                <Bottom/>
                </div>)
            }

            {
                (bottomKey=="2") &&
                ( <div style={{marginTop: "1400px"}}>
                <Bottom/>
                </div>)
            }
        </div>
    );
}

export default Mio;
