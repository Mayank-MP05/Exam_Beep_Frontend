import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  collegeGet,
  collegeGetStudents,
  collegeGetExams,
  collegeGetResults,
} from "./../helpers/collegeQueries";
import classnames from "classnames";
import TableRender from "./../components/college/TableRender";

function CollegeDashboard({ user }) {
  const [activeTab, setActiveTab] = useState("1");
  const [tableData, settableData] = useState([]);
  /***
   * Active Tabs
   * 1 - Student Data
   * 2. - Exam Data
   * 3. - Result Data
   */
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      //collegeGet({ clg_id: user.clg_id }, activeTab, settableData, () => {});
    }
  };
  // useEffect(() => {
  //   collegeGet({ clg_id: user.clg_id }, activeTab, settableData, () => {});
  // }, [activeTab]);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggleTab("1");
            }}>
            Studentts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggleTab("2");
            }}>
            Exams
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggleTab("3");
            }}>
            Results
          </NavLink>
        </NavItem>
        <div className='ml-auto'>
          <Button color='success' onClick={toggleModal}>
            Upload Data
          </Button>
        </div>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Row>
            <Col sm='12'>
              {activeTab == 1 ? (
                <TableRender tableData={tableData} label={"students"} />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='2'>
          <Row>
            <Col sm='12'>
              {activeTab == 2 ? (
                <TableRender tableData={tableData} label={"exams"} />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId='3'>
          <Row>
            <Col sm='12'>
              {activeTab == 3 ? (
                <TableRender tableData={tableData} label={"results"} />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </TabPane>
      </TabContent>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggleModal={toggleModal}>
          Upload the data to DB
        </ModalHeader>

        <form
          action='http://localhost:5000/api/upload'
          method='POST'
          enctype='multipart/form-data'>
          <ModalBody>
            <label>Data to be uploaded</label>
            <div class='input-group mb-3'>
              <div class='input-group-prepend'>
                <label class='input-group-text' for='inputGroupSelect01'>
                  Data File Contains
                </label>
              </div>
              <select
                class='custom-select'
                id='inputGroupSelect01'
                name='collection'>
                <option value='students' selected>
                  Students
                </option>
                <option value='exams'>Exams</option>
                <option value='results'>Results</option>
              </select>
            </div>
            <div class='input-group'>
              <div class='custom-file'>
                <input
                  type='file'
                  name='fileToBeUploaded'
                  class='custom-file-input'
                  id='inputGroupFile04'
                  aria-describedby='inputGroupFileAddon04'
                />
                <label class='custom-file-label' for='inputGroupFile04'>
                  Choose file
                </label>
              </div>
              <div class='input-group-append'>
                <button
                  class='btn btn-outline-secondary'
                  type='button'
                  id='inputGroupFileAddon04'>
                  file.csv
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <input className='btn btn-success' type='submit' />
            <Button color='secondary' onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default CollegeDashboard;
