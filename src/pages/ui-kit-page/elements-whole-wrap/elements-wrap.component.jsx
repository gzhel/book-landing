import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Input } from "../../../shared/components/input.component";
import { Select } from "../../../shared/components/select.component";

export const WholeWrapComponent = () => {
  return (
    <div className="container">
      <div className="section-w-padding">
        <h3>Title</h3>
        <div className="row">
          <div className="layout-block">
            <img src="#" alt="#" />
          </div>
          <div className="layout-block">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              praesentium sunt quidem reiciendis! Molestias esse repellendus,
              quasi sapiente est consectetur illum repudiandae reprehenderit
              magni maiores quam officiis unde possimus autem.
            </p>
          </div>
        </div>
      </div>

      <div className="section-w-padding">
        <h3>AntdComponents</h3>
        <div className="row">
          <h2>antd version: {version}</h2>
          <DatePicker />
          <Button type={"primary"} className={"mt-10"}>
            Button
          </Button>
        </div>
      </div>

      <div className="section-w-padding">
        <h3>Title</h3>
        <div className="row">
          <div className="layout-block">
            <img src="#" alt="#" />
          </div>
          <div className="layout-block">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              praesentium sunt quidem reiciendis! Molestias esse repellendus,
              quasi sapiente est consectetur illum repudiandae reprehenderit
              magni maiores quam officiis unde possimus autem.
            </p>
          </div>
        </div>
      </div>

      <div className="section-w-padding">
        <h3>Title</h3>
        <div className="row">
          <div className="layout-block">
            <div className="content-block">
              <h4>Defenition</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui
                vero voluptas obcaecati omnis nulla. A facere illum, magni
                perferendis, excepturi possimus quidem temporibus aliquid dicta
                maiores illo quibusdam cupiditate.
              </p>
            </div>
          </div>
          <div className="layout-block">
            <div className="content-block">
              <h4>Defenition</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui
                vero voluptas obcaecati omnis nulla. A facere illum, magni
                perferendis, excepturi possimus quidem temporibus aliquid dicta
                maiores illo quibusdam cupiditate.
              </p>
            </div>
          </div>
          <div className="layout-block">
            <div className="content-block">
              <h4>Defenition</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui
                vero voluptas obcaecati omnis nulla. A facere illum, magni
                perferendis, excepturi possimus quidem temporibus aliquid dicta
                maiores illo quibusdam cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-w-padding">
        <h3>Title</h3>
        <div className="row">
          <div className="layout-block">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui
              vero voluptas obcaecati omnis nulla. A facere illum, magni
              perferendis, excepturi possimus quidem temporibus aliquid dicta
              maiores illo quibusdam cupiditate.
            </blockquote>
          </div>
        </div>
      </div>

      <div className="section-w-padding">
        <h3>Title</h3>
        <div className="row">
          <div className="layout-block">
            <div className="table-head">
              <div className="serial">#</div>
              <div className="country">Countries</div>
              <div className="visit">Visits</div>
              <div className="percentage">Percentages</div>
            </div>
            <div className="table-row">
              <div className="serial">01</div>
              <div className="country">
                <img src="#" alt="#" />
                Country
              </div>
              <div className="visit">65031</div>
              <div className="percentage">
                <div className="progress-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-w-padding">
        <div className="row">
          <div className="layout-block">
            <h3>Headers</h3>
          </div>
          <div className="layout-block">
            <h3>Ul</h3>
            <ul>
              <li>
                <span>Text 1</span>
              </li>
              <li>
                <span>Text 2</span>
              </li>
              <li>
                <span>Text 3</span>
                <ul>
                  <li>
                    <span>In text</span>
                    <ul>
                      <li>
                        <span>In in text</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="layout-block">
            <h3>Ol</h3>
            <ol>
              <li>
                <span>Text 1</span>
              </li>
              <li>
                <span>Text 2</span>
              </li>
              <li>
                <span>Text 3</span>
                <ol>
                  <li>
                    <span>Text</span>
                    <ol>
                      <li>
                        <span>Text</span>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="section-w-padding">
        <div className="row">
          <div className="column">
            <h3>Form Elements</h3>
            <Input
              type={"text"}
              name={"first_name"}
              placeholder={"First name"}
              className={"single-input"}
            />
            <Input
              type={"text"}
              name={"address"}
              placeholder={"Address"}
              className={"single-input"}
              icon={"address"}
            />
            <Select defaultValue={"Country"} icon={"planet"} />
            <textarea className="single-textarea" placeholder="Message" />
          </div>
        </div>
      </div>

      <div className="section-w-padding">
        <div className="row">
          <div className="column">
            <div className="block-layout">
              <h3>Switches</h3>
              <div className="switch-layout">
                <p>Text</p>
                <input type="checkbox" />
              </div>
              <div className="switch-layout">
                <p>Text</p>
                <input type="checkbox" />
              </div>
              <div className="switch-layout">
                <p>Text</p>
                <input type="checkbox" />
              </div>
            </div>

            <div className="block-layout">
              <h3>Selectboxes</h3>
              <div className="switch-layout">
                <p>Text</p>
                <input type="checkbox" />
              </div>
              <div className="select-layout">
                <Select defaultValue={"Country"} icon={"planet"} />
              </div>
            </div>

            <div className="block-layout">
              <h3>Checkboxes</h3>
              <div className="checkbox-layout">
                <p>Text</p>
                <input type="checkbox" />
              </div>
              <div className="checkbox-layout">
                <p>Text</p>
                <input type="checkbox" />
              </div>
              <div className="checkbox-layout">
                <p>Text</p>
                <input type="checkbox" />
              </div>
              <div className="checkbox-layout">
                <p>Text</p>
                <input type="checkbox" />
              </div>
            </div>

            <div className="block-layout">
              <h3>Radios</h3>
              <div className="radio-layout">
                <p>Text</p>
                <input type="radio" />
              </div>
              <div className="radio-layout">
                <p>Text</p>
                <input type="radio" />
              </div>
              <div className="radio-layout">
                <p>Text</p>
                <input type="radio" />
              </div>
              <div className="radio-layout">
                <p>Text</p>
                <input type="radio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
