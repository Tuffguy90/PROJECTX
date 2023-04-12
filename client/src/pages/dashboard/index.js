import { useEffect, useMemo, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import IncomeAreaChart from './component/IncomeAreaChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import reportService from 'services/report.service';
import subsidaryService from 'services/subsidary.service';
import { Report } from 'pages/report/index';
const Dashboard = () => {
    const [countData, setCountData] = useState([]);
    const [graphData, setGraphData] = useState(null);
    const [selectedParentSubsidiary, setParentSubsidiary] = useState('');
    const [selectedSubsidiary, setSubsidiary] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [childSubsidiary, setChildSubsidiary] = useState([]);
    const [selectedFin, setFin] = useState(null);
    const [subsidiaries, setSubsidiaries] = useState([]);
    const [reportData, setReportData] = useState([]);
    const [financialYearList, setFinancialYearList] = useState([]);
    let loginUserData = JSON.parse(localStorage.getItem('_userData'));
    useEffect(() => {
        let subId = selectedSubsidiary;
        !loginUserData.subsidary || loginUserData.subsidary.length === 0 ? loadSubsidiaries() : setSubsidiaries(loginUserData.subsidary);
        loadGraphData(new Date().getFullYear(), subId);
        loginUserData?.role_id === 1 &&
            reportService.getDashboardCount().then(({ data }) => {
                setCountData(data?.data);
            });
        reportService.getFinancialYearList().then(({ data }) => {
            setFinancialYearList(data?.data);
        });
    }, []);

    const loadSubsidiaries = async () => {
        const data = await subsidaryService.getSubsidaries(1);
        setSubsidiaries(data?.data);
    };

    const loadGraphData = async (financial_year, subsidary_id) => {
        reportService.getDashboardGraphData(financial_year, subsidary_id).then(({ data }) => {
            setGraphData(data?.data);
        });
    };

    const handleSubmit = (e) => {
        loadGraphData(selectedFin?.target.value, selectedSubsidiary);
        setReportData({
            financial_year: selectedFin?.target.value,
            selected_subsidary: selectedSubsidiary
        });
    };

    const handleChildEvent = (e) => {
        loadGraphData(selectedFin?.target.value, selectedSubsidiary);
    };

    const showCountData = useMemo(() => {
        return countData?.map((item) => {
            return (
                <Grid item xs={12} key={item?.name} sm={6} md={4} lg={3}>
                    <AnalyticEcommerce title={item.name} count={item.cntVal} />
                </Grid>
            );
        });
    }, [countData]);

    const checkChildSubsidiary = (subId) => {
        selectedUnit !== '' && setSelectedUnit('');
        let child = subsidiaries.filter((item) => {
            if (subId == item?.id) return item;
        });
        setChildSubsidiary(child[0]?.child_subsidiary);
    };

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
            {showCountData}
            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            {/* Filter Rows */}
            <Grid item xs={12} md={12} lg={12}>
                <div className="row">
                    <div className="col-lg-3">
                        <label>Financial Year</label>&nbsp;
                        <select className="form-control" onChange={(e) => setFin(e)}>
                            <option value="">--SELECT--</option>
                            {financialYearList.map((years, index) => {
                                return (
                                    <option key={index} value={years.financial_year}>
                                        {years.fin_name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col-lg-3">
                        {subsidiaries?.length > 0 && (
                            <>
                                <label>Subsidiary</label>&nbsp;
                                <select
                                    className="form-control"
                                    value={selectedParentSubsidiary}
                                    onChange={(e) => (
                                        setParentSubsidiary(e?.target?.value),
                                        checkChildSubsidiary(e?.target?.value),
                                        setSubsidiary(e?.target?.value)
                                    )}
                                >
                                    <option value="">--SELECT--</option>
                                    {subsidiaries.map((eachSubsidiary, index) => {
                                        return (
                                            <option key={index} value={eachSubsidiary.id}>
                                                {eachSubsidiary.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </>
                        )}
                    </div>
                    <div className="col-lg-3">
                        {childSubsidiary?.length > 0 && (
                            <>
                                <label>Units</label>&nbsp;
                                <select
                                    className="form-control"
                                    value={selectedUnit}
                                    onChange={(e) => (setSelectedUnit(e?.target?.value), setSubsidiary(e?.target?.value))}
                                >
                                    <option value="">--SELECT--</option>
                                    {childSubsidiary.map((eachSubsidiary, index) => {
                                        return (
                                            <option key={index} value={eachSubsidiary.id}>
                                                {eachSubsidiary.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </>
                        )}
                    </div>
                    <div className="col-lg-3" style={{ paddingTop: '20px' }}>
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Search
                        </button>
                    </div>
                </div>
            </Grid>
            {/* row 2 */}
            <Grid item xs={12} md={12} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Subsidiary Wise Heads</Typography>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        {graphData?.length > 0 ? (
                            <IncomeAreaChart series={graphData} />
                        ) : (
                            <h5 style={{ textAlign: 'center' }} className="p-5">
                                Data Not Found.
                            </h5>
                        )}
                    </Box>
                </MainCard>
            </Grid>

            {/* row 3 */}
            <Grid item xs={12} md={12} lg={12}>
                <MainCard sx={{ mt: 2 }} content={false}>
                    {/* <OrdersTable /> */}
                    <Report hideSearchBar={true} onSearch={reportData} onChildEvent={handleChildEvent} />
                </MainCard>
            </Grid>
        </Grid>
    );
};
export default Dashboard;
