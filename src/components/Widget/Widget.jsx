import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDataByDefault } from "../../redux/widgetSlice";
import Preloader from "../PreloaderModal/Preloader";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: ${(props) => props.theme.darkBackground};
  border-radius: 12px;
  height: 100%;
  padding: 10px 20px 10px;
  color: ${(props) => props.theme.color};
  position: relative;
  border:1px solid ${props=>props.theme.color}
`;
const Title = styled.h1`
  font-size: 26px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Grid = styled.div`
  display: grid;
  place-content: center;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 20px;
`;
const Subtitle = styled.p``;
const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
`;
const Card = styled.div`
  width: 150px;
  border-radius: 10px;
  display: flex;
  padding: 3px 10px 5px;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.uniqueColor};
`;
const Modal = styled.div`
  width: 60px;
  height: 16px;
  background: green;
  visibility: hidden;
  opacity: 1;
  display: none;
  position: absolute;
  transition: 0.2s ease;
`;
const IconButton = styled.button`
  transition: 0.2s ease;
  border-radius: 7px;
  transform: translateX(-4px);
  position: absolute;
  width: 2px;
  height: 10px;
  &:hover {
    transform: translateX(-16px);
    width: 20px;
    border-radius: 10px;
    height: 20px;
  }
`;

const Widget = ({ darkTheme }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getDataByDefault());
    setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  const [isCelcium, setIsCelcium] = useState(true);

  const { othersDay, weatherData } = useSelector((state) => state.widget);

  return (
    <>
      {weatherData.weather.name === null ? (
        <Preloader />
      ) : (
        <Wrapper theme={darkTheme ? theme.default : theme.dark}>
          <GridContainer>
            <Grid>
              <Title>{`${weatherData.cityName}, ${weatherData.countryIndex}`}</Title>
              <Subtitle>{currentTime}</Subtitle>
              <Cards>
                {othersDay.map((el) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    {isModalOpen && (
                      <Modal
                        style={{
                          display: "block",
                          visibility: "visible",
                          transform: "translateX(-90px)",
                        }}
                      >
                        <input type="text" style={{ width: "60%" }} />
                      </Modal>
                    )}
                    <IconButton
                      onClick={() => setIsModalOpen(!isModalOpen)}
                      style={{
                        background: theme.default.uniqueColor,
                        outline: "0",
                        border: 0,
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                    ></IconButton>
                    <Card theme={theme.default}>
                      <span>{el.name}</span>
                      <span>
                        {`${String(Math.round(el.main.temp)).slice(
                          0,
                          2
                        )},${String(Math.round(el.main.temp)).slice(
                          2,
                          3
                        )}`}{" "}
                        °C
                      </span>
                    </Card>
                  </div>
                ))}
              </Cards>
            </Grid>
            <Grid>
              {weatherData.weather.name === "Clear" && (
                <Icon>
                  <CloudIcon
                    style={{
                      width: "50px",
                      height: "50px",
                      paddingBottom: "20px",
                    }}
                  />
                </Icon>
              )}
              {weatherData.weather.name === "Clouds" && (
                <Icon>
                  <CloudIcon
                    style={{
                      width: "50px",
                      height: "50px",
                      paddingBottom: "20px",
                    }}
                  />
                </Icon>
              )}
              {weatherData.weather.name === "Rain" && (
                <Icon>
                  <CloudIcon
                    style={{
                      width: "50px",
                      height: "50px",
                      paddingBottom: "20px",
                    }}
                  />
                </Icon>
              )}
              {weatherData.weather.name === "Sun" && (
                <Icon>
                  <WbSunnyIcon
                    style={{
                      width: "50px",
                      height: "50px",
                      paddingBottom: "20px",
                    }}
                  />
                </Icon>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <input
                  type="checkbox"
                  className='checkbox'
                  checked={!isCelcium}
                  style={{ width: "120px" }}
                  onChange={() => {
                    setIsCelcium(!isCelcium);
                  }}
                />
                <p
                  style={{
                    fontSize: "13px",
                    textAlign: "center",
                    marginTop: "5px",
                  }}
                >
                  Celcium - Fahrenheit
                </p>
              </div>
              <h1 style={{ fontSize: "34px", textAlign: "center" }}>
                {isCelcium
                  ? `${String(Math.round(weatherData.temp)).slice(
                      0,
                      2
                    )},${String(Math.round(weatherData.temp)).slice(2, 3)} °C`
                  : `${String(Math.round(weatherData.temp * 1.8 + 32)).slice(
                      0,
                      2
                    )},${String(Math.round(weatherData.temp * 1.8 + 32)).slice(
                      2,
                      3
                    )} °F`}
              </h1>
              <h2 style={{ fontSize: "16px", textAlign: "center" }}>
                Feels like:{" "}
                {isCelcium
                  ? `${String(Math.round(weatherData.tempFeelsLike)).slice(
                      0,
                      2
                    )},${String(Math.round(weatherData.tempFeelsLike)).slice(
                      2,
                      3
                    )} °C`
                  : `${String(
                      Math.round(weatherData.tempFeelsLike * 1.8 + 32)
                    ).slice(0, 2)},${String(
                      Math.round(weatherData.tempFeelsLike * 1.8 + 32)
                    ).slice(2, 3)} °F`}
              </h2>
            </Grid>
          </GridContainer>
        </Wrapper>
      )}
    </>
  );
};

export default Widget;
