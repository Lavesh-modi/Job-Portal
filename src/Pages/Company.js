import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import Axios from axios
import Jobpagedata from "../component/Jobpagedata.json";
import Axios from "axios";

export default function Company() {
  const [state, setState] = useState();
  console.log("comp");
  const params = useParams();
  console.log("params", params?.[0]);
  // console.log(params);       //useParams is a Client Component hook that lets you read a route's dynamic params filled in by the current URL.
  const comp = params.comp;
  console.log("data", comp);
  // console.log(params);
  // console.log('hello',comp);

  useEffect(() => {
    console.log("Calleed useEffects");
    Axios.get(`http://localhost:5000/api/v1/getcardsID/${comp}`)
      .then((res) => setState(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("checkeerrrr", state);

  // // const data = Jobpagedata.filter((element) => element.name == comp);
  // console.log(">>>>>",data);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div id="sidebar">SIDE BAR</div>

          <div className="card  side-text ">
            <h3> {state?.Role}</h3>
            <h6> Udaipur, Rajasthan</h6>
            <h6>As per Industry standard</h6>

            <h6>Last Date to Apply</h6>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" class="btn btn-success">
                EASSY APPLY
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <main>main</main>
          <div>
            <figure class="figure">
              <img
                src={state?.imgsrc}
                class="figure-img img-fluid rounded"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <figcaption class="figure-caption">
                Logo of the company
              </figcaption>
            </figure>
            <div>
              <a href={state?.link} class="link-primary">
                Adani
              </a>
              <br></br>
              <h4>About Company</h4>
              <p>hello {state?.about}</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <br></br>
                <h5>Job description</h5>
                <ul>
                  <li>
                    In 2010, Adani group with help of Petronet LNG will setup a
                    solid cargo port through a Joint Venture company namely
                    Adani Petronet (Dahej) Port Private Ltd., has already
                    commenced its Phase 1 operations from August 2010 at Dahej
                    Port. solid cargo port terminal would have facilities to
                    import/export bulk products like coal,
                  </li>
                  <br></br>
                  <li>
                    In 2010, Adani group with help of Petronet LNG will setup a
                    solid cargo port through a Joint Venture company namely
                    Adani Petronet (Dahej) Port Private Ltd., has already
                    commenced its Phase 1 operations from August 2010 at Dahej
                    Port. solid cargo port terminal would have facilities to
                    import/export bulk products like coal,
                  </li>
                  <br></br>
                  <li>
                    In 2010, Adani group with help of Petronet LNG will setup a
                    solid cargo port through a Joint Venture company namely
                    Adani Petronet (Dahej) Port Private Ltd., has already
                    commenced its Phase 1 operations from August 2010 at Dahej
                    Port. solid cargo port terminal would have facilities to
                    import/export bulk products like coal,
                  </li>
                  <br></br>
                  <li>
                    In 2010, Adani group with help of Petronet LNG will setup a
                    solid cargo port through a Joint Venture company namely
                    Adani Petronet (Dahej) Port Private Ltd., has already
                    commenced its Phase 1 operations from August 2010 at Dahej
                    Port. solid cargo port terminal would have facilities to
                    import/export bulk products like coal,
                  </li>
                  <br></br>
                  <li>
                    In 2010, Adani group with help of Petronet LNG will setup a
                    solid cargo port through a Joint Venture company namely
                    Adani Petronet (Dahej) Port Private Ltd., has already
                    commenced its Phase 1 operations from August 2010 at Dahej
                    Port. solid cargo port terminal would have facilities to
                    import/export bulk products like coal,
                  </li>
                  <br></br>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>footer </footer>

      {/* does not final the footer bcause of the ui left on the dashboard */}
    </div>

    //     <div className=" main ">
    // <div className=" item1">
    // <div class="header">
    //   <img src="img/logo.png" alt="logo" />

    //   <h1>My website name</h1>
    //   <a href=""   >link</a>
    // </div>
    // <br></br>
    // <div className="texta ">
    // <section className="texture" >
    //   <h3>About company</h3>
    //   <p>company data   </p>
    // </section>
    // <section className="texture" >
    //   <h3>job description</h3>
    //   <p>description data   </p>
    // </section>
    // <section >
    //   <h6></h6>
    // </section>

    // </div>
    // </div>
    //     </div>
    // <div>
    //   <div>
    //     <img src={data.imgsrc} alt="logo"></img>
    //     <h3> erjwkewlrgjt</h3>
    //   </div>
    //   <h5> </h5>
    // </div>
  );
}
