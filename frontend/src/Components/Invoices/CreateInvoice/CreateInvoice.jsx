import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import {
  emptyUserProjects,
  getAllclientsDetails,
  getUsersProjectsDetails,
  getUsersProjectsSuccess,
  selectDate,
} from "../../../store/Invoices/action";

const CreateInvoice = ({ setShowCreateInvoiceBox }) => {
  const [redirectToInovice, setRedirectToInovice] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  const dispatch = useDispatch();
  const allClients = useSelector((state) => state.invoice.allClients);
  const clientsProjects = useSelector((state) => state.invoice.projects);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "selectClient") {
      if (clientsProjects.length !== 0) {
        dispatch(emptyUserProjects([]));
      }

      let val = value.split(",");
      const clientId = val[0];
      setSelectedClient(clientId);
      val.shift();

      if (val.length > 0) {
        val.map((item) => {
          dispatch(getUsersProjectsDetails(item));
        });
      }
    } else if (name === "selectProject") {
      setSelectedProject(value);
    }
  };

  const createInvoiceButton = () => {
    if (selectedProject === "") {
      return;
    }
    setRedirectToInovice(true);
  };

  useEffect(() => {
    dispatch(getAllclientsDetails());
  }, []);

  return (
    <Container>
      <div>
        <div>
          <h2>Create Invoice</h2>
          <button
            onClick={() => {
              setShowCreateInvoiceBox(false);
            }}
          >
            X
          </button>
        </div>
        <Formdiv>
          <div>
            <div>
              <label>Client</label>
              <Select
                name="selectClient"
                // value={selectedClient}
                onChange={handleOnChange}
              >
                <option value="Select client...">Select client...</option>
                {allClients.map(({ id, name, projects }) => {
                  return (
                    <option key={id} value={[id, projects]}>
                      {name}
                    </option>
                  );
                })}
              </Select>
            </div>

            <div>
              <label>Projects</label>
              <Select name="selectProject" onChange={handleOnChange}>
                <option value="Select client...">Select project...</option>
                {clientsProjects.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </div>
            <label>Date</label>
            <div>
              <input
                type="date"
                onChange={(e) => dispatch(selectDate(e.target.value))}
              />
            </div>
          </div>

          <button
            onClick={() => {
              createInvoiceButton();
            }}
          >
            <Link to={`/invoices/${selectedClient}`}>Create Inovice</Link>
          </button>
          <button
            onClick={() => {
              setShowCreateInvoiceBox(false);
            }}
          >
            Cancel
          </button>
        </Formdiv>
      </div>
    </Container>
  );
};

export { CreateInvoice };

const Container = styled.div`
  position: absolute;
  background-color: rgb(0 0 0 / 17%);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    border-radius: 4px;
    overflow: hidden;
    width: 30%;
    height: 63%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 17%), 0 -2px 4px 0 rgb(0 0 0 / 17%);
    z-index: 50;
    & > div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 12%;
      background-color: #fafafa;
      padding: 10px 16px;

      h2,
      button {
        font-size: 20px;
      }
    }
  }
`;

const Formdiv = styled.div`
  background-color: white;
  padding: 10px 16px;
  height: 88%;

  div:first-child,
  div:nth-child(2) {
    position: relative;
  }

  label {
    font-size: 16px;
    display: block;
    margin-bottom: 12px;
  }
  input {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 17%), 0 -2px 4px 0 rgb(0 0 0 / 17%);
    padding: 8px;
    display: block;
    width: 100%;
    margin-bottom: 25px;
  }

  button {
    width: 28%;
    border-radius: 3px;
    margin-top: 10px;
    margin-right: 4%;
    background-color: #12a252;
    color: white;
    font-size: 14px;
    padding: 13px 0;

    a {
      color: white;
    }
  }

  button + button {
    background-color: white;
    color: #767676;
  }
`;

const ClientsData = styled.div`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 17%), 0 -2px 4px 0 rgb(0 0 0 / 17%);
  width: 100%;
  z-index: 50;
  background-color: white;
  position: absolute;
  top: 62px;
  div {
    padding: 6px 6px;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 17%), 0 -2px 8px 0 rgb(0 0 0 / 17%);
  }
`;

const Select = styled.select`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 17%), 0 -2px 4px 0 rgb(0 0 0 / 17%);
  padding: 8px;
  display: block;
  width: 100%;
  border: none;
  margin-bottom: 25px;
`;
