import React from 'react';
import styled from "styled-components";

function HomePage(){
    return(
        <>
            <StyledHomePage>
                <div className="home">
                    <div className="images">
                        <img src="Images/1.jpg" alt=""/>
                        <img src="Images/2.jpg" alt=""/>
                        <img src="Images/3.jpg" alt=""/>
                        <img src="Images/4.jpg" alt=""/>
                        <img src="Images/5.jpg" alt=""/>
                    </div>
                    <h1>3 day trip to the Latgale</h1>
                    <div className="description">
                        <h2>Welcome to the our trip to the Latgale!</h2>
                        <img src="Images/description.jpg" alt=""/>
                        <p>Have you ever rode canoes along the Daugava, or have you been in the Daugavpils fortress? No? Then this tour is for you! Traveling with us, you will see all the sights of the city, as well some historical monuments.Travel with us and have fun!</p>
                    </div>
                </div>
                <div className="price">
                    <h2>Price:</h2>
                    <p>This absorbing journey will include in the price a hotel(with breakfast and dinner), canoe,ticket to the Daugavpils fortress with guide and all possible entertainments.It will cost <span>80 euro</span> per person. </p>
                </div>
                <div className="schedule">
                    <h2>Schedule:</h2>
                    <h3>1st day:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>8:00</span></td>
                                <td>Pick up at the bus (Stacijas laukums 4, Centra rajons)</td>
                            </tr>
                            <tr>
                                <td><span>10:50</span></td>
                                <td>Arrival to Daugavpils</td>
                            </tr>
                            <tr>
                                <td><span>11:00</span></td>
                                <td>Check in at the hotel «Park Hotel Latgola"</td>
                            </tr>
                            <tr>
                                <td><span>11:00 - 13:00</span></td>
                                <td>Chilling time</td>
                            </tr>
                            <tr>
                                <td><span>13:10</span></td>
                                <td>We go to the Daugava to ride canoes</td>
                            </tr>
                            <tr>
                                <td><span>13:30</span></td>
                                <td>Arriving to the Daugava</td>
                            </tr>
                            <tr>
                                <td><span>13:30-16:00</span></td>
                                <td>Canoeing</td>
                            </tr>
                            <tr>
                                <td><span>16:10 - 16:30</span></td>
                                <td>Arriving to the hotel</td>
                            </tr>
                            <tr>
                                <td><span>17:10</span></td>
                                <td>Dinner</td>
                            </tr>
                            <tr>
                                <td><span>18:30</span></td>
                                <td>Evening walk in Daugavpils</td>
                            </tr>
                            <tr>
                                <td><span>20:00</span></td>
                                <td>Returning back to the hotel</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>2nd day:</h3>
                    <table>
                        <thead id="second">
                            <tr>
                                <th>Time</th>
                                <th>Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>11:00</span></td>
                                <td>Wake up</td>
                            </tr>
                            <tr>
                                <td><span>11:30</span></td>
                                <td>Breakfast</td>
                            </tr>
                            <tr>
                                <td><span>12:00</span></td>
                                <td>Going to Daugavpils fortress</td>
                            </tr>
                            <tr>
                                <td><span>13:00</span></td>
                                <td>Excursion through the fortress</td>
                            </tr>
                            <tr>
                                <td><span>15:30</span></td>
                                <td>Lunch</td>
                            </tr>
                            <tr>
                                <td><span>16:00</span></td>
                                <td>Free time</td>
                            </tr>
                            <tr>
                                <td><span>18:00</span></td>
                                <td>We return back to the hotel</td>
                            </tr>
                            <tr>
                                <td><span>19:00</span></td>
                                <td>Dinner</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>3rd day:</h3>
                    <table>
                        <thead id="third">
                            <tr>
                                <th>Time</th>
                                <th>Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span>12:00 - 12:10</span></td>
                                <td>Meeting at 18. November street near Monument to Soviet soldiers.</td>
                            </tr>
                            <tr>
                                <td><span>12:10 - 15:10</span></td>
                                <td> (Free time to do whatever You want)</td>
                            </tr>
                            <tr>
                                <td><span>15:15</span></td>
                                <td>meeting in the same park (18. November street)</td>
                            </tr>
                            <tr>
                                <td><span>15:20 - 18:30</span></td>
                                <td>Rode to home</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item" id="contacts">
                                <h3>Contacts:</h3>
                                <ul>
                                    <li><a href="#">Email: <span>triptolatgale@gmail.com</span></a></li>
                                    <li><a href="#">Phone Number: <span>+371302293</span></a></li>
                                    <li><a href="#">Address: <span>Purvciema-38</span></a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>About Us:</h3>
                                <p>We are travel company from Latvia, Riga, who gives you an unforgettable journey to the Latgale.</p>
                            </div>
                       </div>
                        <p className="losung">Travel with us and have fun!</p>
                        <p className="copyright">AB Industries © 2021</p>
                    </div>
                </footer>
                </div>
        </StyledHomePage>
        </>
    )
}
const StyledHomePage = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    font-family: "Allerta Stencil", sans-serif;
    text-transform: uppercase;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    animation-name: hvr-bob-float, hvr-bob;
    animation-duration: .3s, 1.5s;
    animation-delay: 0s, .3s;
    animation-timing-function: ease-out, ease-in-out;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: forwards;
    animation-direction: normal, alternate;
  }

  p {
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 20px;
    margin-top: 20px;
  }

  h2 {
    font-size: 40px;
    font-family: "Allerta Stencil", sans-serif;
  }

  .home {
    background-color: white;
    animation: fadeinhome 2s;

    .description {
      width: 50%;
      display: block;
      margin: 50px auto 50px auto;
      text-align: center;
      border-radius: 15px;
      padding: 10px;
      background-color: white;
      border: 3px solid green;

      > h2 {
        font-size: 36px;
        margin-bottom: 10px;
        font-family: "Allerta Stencil", sans-serif;
      }
    }

    .images {
      display: block;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      border-bottom: 3px solid #b0cfb0;
      padding-top: 20px;

      > img {
        width: 20%;
        height: 200px;
        z-index: 1;
        border: 5px solid #ffffff;
      }
    }

    .images:after {
      content: '';
      display: inline-block;
      width: 100%;
    }
  }

  .price {
    background-color: #efeeee;
    animation: fadeinprice 2s;
    padding: 15px;


    > h2 {
      text-align: center;
    }

    > p {
      text-align: center;
    }

    > p > span {
      color: orange;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .schedule {
    background-color: white;
    animation: fadeinschedule 2s;
    margin-bottom: 50px;

    h2, h3 {
      text-align: center;
    }

    h2 {
      margin-top: 50px;
      margin-bottom: 50px;
    }

    h3 {
      font-family: 'Nanum Gothic', sans-serif;
      font-weight: bold;
    }

    table {
      border-spacing: 1px;
      border-collapse: collapse;
      background: white;
      border-radius: 15px;
      overflow: hidden;
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      position: relative;
      margin-bottom: 50px;

      td, th {
        padding-left: 8px
      }

      thead tr {
        height: 60px;
        font-size: 20px;
        background-color: lightgreen;
      }

      #second tr {
        background: #ff9647;
      }

      #third tr {
        background: #ffc20e;
      }

      thead tr {
        height: 60px;
        background: lightgreen;
        font-size: 16px;
      }

      tbody tr {
        height: 48px;
        border-bottom: 1px solid #E3F1D5;

        &:last-child {
          border: 0;
        }
      }

      td, th {
        text-align: left;

        &.l {
          text-align: right
        }

        &.c {
          text-align: center
        }

        &.r {
          text-align: center
        }
      }

      td > span {
        font-weight: bold;
      }
    }

  }

  .footer-dark {
    border-top: 2px solid green;
    padding: 19px 0;
    color: #2f2f2f;
    background-color: #ffffff;
  }

  .footer-dark h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    font-family: "Allerta Stencil", sans-serif;
  }

  .footer-dark p {
    font-family: "Bubblegum Sans", sans-serif;
    text-align: center;
    font-size: 16px;
  }

  .footer-dark ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 0;
    text-align: center;
    font-family: "Bubblegum Sans", sans-serif;
  }

  .footer-dark ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
    text-align: center;
  }

  .footer-dark ul a span {
    font-size: 12px;
    font-family: 'Nanum Gothic', sans-serif;
  }

  .footer-dark #contacts {
    margin-left: 170px;
    margin-right: 100px;
  }

  .footer-dark ul a:hover {
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    .footer-dark .item:not(.social) {
      text-align: center;
      padding-bottom: 20px;
    }

    .footer-dark #contacts {
      text-align: center;
      padding-bottom: 20px;
    }
  }

  .footer-dark .item.text {
    margin-bottom: 36px;
  }

  @media (max-width: 767px) {
    .footer-dark .item.text {
      margin-bottom: 0;
    }
  }

  .footer-dark .item.text p {
    opacity: 0.6;
    margin-bottom: 0;
  }

  .footer-dark .item.social {
    text-align: center;
  }

  @media (max-width: 991px) {
    .footer-dark .item.social {
      text-align: center;
      margin-top: 20px;
    }
  }

  .footer-dark .losung {
    font-size: 20px;
    text-align: center;
    color: #2f2f2f;
    padding-top: 24px;
    font-family: "Bubblegum Sans", sans-serif;
    margin-bottom: -20px;
    margin-top: -20px;
  }

  .footer-dark .copyright {
    text-align: center;
    padding-top: 24px;
    opacity: 0.3;
    font-size: 13px;
    margin-bottom: 0;
  }

  @keyframes fadeinhome {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes fadeinprice {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes fadeinschedule {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes fadeinfooter {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
`;
export default HomePage;