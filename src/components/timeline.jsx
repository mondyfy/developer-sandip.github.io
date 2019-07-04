import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at Code Pixelz{" "}
                          <span>June 2018 - October 2018</span>
                        </h2>
                        <p>
                          I have joined the Code Pixelz Media as a Web
                          Developer-Intern in the support team. My major part of
                          the work was into the field of creating sustainable
                          and flexible websites which enables developers at CPM
                          to do rapid development in an industry standard
                          production environments.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduation at Amrit Campus
                          <span>Dec,2016-Present</span>
                        </h2>
                        <p>
                          I am pursuing my under-graduation studies with major
                          in CSIT(Computer Science and Information Technology).
                          I have taken courses like DSA,DDA,AI,SAD, OOPs,
                          Computer Networks, Web Technology,Cryptography over
                          the years and have better understanding of these
                          subjects.I have also been part of OSAC(Open Source
                          Ascol Circle) scince my first Semester of college.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2004-2016</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry,Biology & Maths as
                          a School Topper. During my time at school, I have
                          developed interest in solving complex problems of the
                          fundamental science which helped me to improve my
                          understanding of any problem and also my mathematical
                          skills to actually solve the problems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
