import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setExpenses, postExpenses } from '../../api/api';
import { setAllProjects } from '../../store/projects/actions';
import MainpageNav from '../MainpageNavbar/MainpageNav';
import styles from './Expenses.module.css';

const expensesData = {
    id: 1,
    projectName: "",
    category1: "",
    value1: "",
    category2: "",
    value2: "",
    category3: "",
    value3: "",
    category4: "",
    value4: "",
}
const Expenses =  () => {
    const [dataExpense, setDataExpense] = React.useState(expensesData);

    React.useEffect(()=>{
        postExpenses(expensesData);
    },[])

    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(setAllProjects());
    },[])
    const projects = useSelector((state) => state.projects, shallowEqual);
    console.log("P",projects.projects)
    //const {projectName, category1, value1, category2, value2, category3, value3, category4, value4} = dataExpense;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDataExpense({...dataExpense, [name]: value});
    }
    const handleChangeSelect = (item) => {
        console.log(item.target.name, item.target.value);
    }
    const manageExpenses = () => {
        console.log(dataExpense);
        setExpenses(1,dataExpense);
    }

    return(
        <div className={styles.ExpensesPrimaryDiv}>
            <MainpageNav />
            <div className={styles.sylingFormBox}>
                <h1 className={styles.expensesHeader}>Manage Your Expenses</h1>
                <div>
                    <div className={styles.ExpensesFlexDiv}>
                        <label className={styles.ExpensesFormFirstLabel} htmlFor="">Choose Project</label>
                        {/* <input className={styles.ExpensesFormInput} type="text" name="projectName" onChange={(e)=>handleChange(e)} /> */}
                        <Select
                            name="projectName"
                            onChange={(e)=>handleChange(e)}
                        >
                        <option value="Select client...">
                          Select project...
                        </option>
                        {projects.projects.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
                        </Select>
                    </div><br/>
                    <label className={styles.ExpensesFormSecondLabel} htmlFor="">Category</label>
                    <div className={styles.ExpensesFlexDiv}>
                        <input name="category1" onChange={(e)=>handleChange(e)} className={styles.ExpensesFormInput} type="text" placeholder="Category 1" />
                        <input name="value1" onChange={(e)=>handleChange(e)} className={styles.ExpensesFormInput} type="number" placeholder="value" />
                    </div>
                    <div className={styles.ExpensesFlexDiv}>
                        <input name="category2" onChange={(e)=>handleChange(e)} className={styles.ExpensesFormInput} type="text" placeholder="Category 2" />
                        <input name="value2" onChange={(e)=>handleChange(e)} className={styles.ExpensesFormInput} type="number" placeholder="value" />
                    </div>
                    <div className={styles.ExpensesFlexDiv}>
                        <input name="category3" onChange={(e)=>handleChange(e)} className={styles.ExpensesFormInput} type="text" placeholder="Category 3" />
                        <input name="value3" onChange={(e)=>handleChange(e)} className={styles.ExpensesFormInput} type="number" placeholder="value" />
                    </div>
                    <div className={styles.ExpensesFlexDiv}>
                        <input name="category4" onChange={(e)=>handleChange(e)} className={styles.ExpensesFormInput} type="text" placeholder="Category 4" />
                        <input name="value4" onChange={(e)=>handleChange(e)} className={styles.ExpensesFormInput} type="number" placeholder="value" />
                    </div>
                </div>
                <button className={styles.ExpensesButton} onClick={manageExpenses}>Create Expenses</button>
            </div>
        </div>
    )
}

export {Expenses}

const Select = styled.select`
  box-shadow:0 2px 4px 0 rgb(0 0 0 / 17%),0 -2px 4px 0 rgb(0 0 0 / 17%);
    padding:8px;
    display:block;
    width:100%;
    border:none;
    margin-bottom:25px;
`;