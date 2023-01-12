import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { Icon } from "@iconify/react";
import html5 from "@iconify/icons-logos/html-5";
import javascriptIcon from "@iconify/icons-logos/javascript";
import fileTypeCss from "@iconify/icons-vscode-icons/file-type-css";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import reactIcon from "@iconify/icons-logos/react";
import fileTypeNode from "@iconify/icons-vscode-icons/file-type-node";
import mongodbIcon from "@iconify/icons-logos/mongodb-icon";
import fileTypeMysql from "@iconify/icons-vscode-icons/file-type-mysql";
import pythonIcon from "@iconify/icons-logos/python";
import fileTypeDjango from "@iconify/icons-vscode-icons/file-type-django";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="--color-light">What Skills I Have</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <Icon icon={html5} className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <Icon icon={fileTypeCss} className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <Icon
                icon={javascriptIcon}
                className="experience__details-icon"
              />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <Icon icon={bootstrapIcon} className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <Icon icon={reactIcon} className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <Icon icon={fileTypeNode} className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <Icon icon={mongodbIcon} className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <Icon icon={fileTypeMysql} className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <Icon icon={pythonIcon} className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <Icon
                icon={fileTypeDjango}
                className="experience__details-icon"
              />
              <div>
                <h4>Django</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience