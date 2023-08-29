import React from "react";

const Contact = () => {
  return (
    <div
      className="container contact"
      style={{
        paddingLeft: "5%",
        // paddingRight: "5%",
        width: "70%",
        height: "60%",
        justifyContent: "center",
        borderRound: "1px solid",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row">
        <div
          className="col-lg-9 contact"
          style={{
            backgroundColor: " #e3a638",
            padding: " 4% 6% 4% 8% ",
            boxShadow: "5px 12px 16px -12px",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Contact us -</h1>
          <p style={{ height: "100px" }}>
            <span
              style={{
                fontFamily: "Aileron Regular",
                fontWeight: "bold",
                color: "black",
                fontSize: "25px",
              }}
            >
              Address -
            </span>{" "}
            <br />
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              {" "}
              BHAGYASHREE GARDEN SOCIETY, SURVEYNO.10, ROW house, Dhankawadi, Pune, Maharashtra 411043
            </p>
          </p>
          <br />
          <br/>
          <p
            className="a2 first"
            style={{
              border: "1 solid black",
              borderRadius: "5px ",
              fontSize: "20px",
              // backgroundColor: "white",
              fontWeight: "bold",
            
              
            }}
            href="mailto:Jayhomecookedbiryani@gmail.com"
          >
            Jayhomecookedbiryani
            @gmail.com
          </p>
          <br />
          <button
            className="a2 sec"
            style={{
              border: "1 solid black",
              borderRadius: "5px ",
              fontSize: "20px",
              marginTop: "5px",
              backgroundColor: "white",
            }}
            href="tel: 8669055430"
          >
            8669055430
          </button>
          <br />
          <button
            className="a2 sec"
            style={{
              border: "1 solid black",
              borderRadius: "5px ",
              fontSize: "20px",
              marginTop: "5px",
              backgroundColor: "white",
            }}
            href="tel: 8669061397"
          >
            8669061397
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
