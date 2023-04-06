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
    const [selectedSubsidiary, setSubsidiary] = useState(1);
    const [selectedFin, setFin] = useState(null);
    const [subsidiaries, setSubsidiaries] = useState([]);
    const [reportData, setReportData] = useState([]);
    let loginUserData = JSON.parse(localStorage.getItem('_userData'));
    useEffect(() => {
        let subId = selectedSubsidiary;
        !loginUserData.subsidary || loginUserData.subsidary.length === 0 ? loadSubsidiaries() : (subId = loginUserData?.subsidary?.id);
        setSubsidiary(subId);
        loadGraphData(new Date().getFullYear(), subId);
        loginUserData?.role_id === 1 &&
            reportService.getDashboardCount().then(({ data }) => {
                setCountData(data?.data);
            });
    }, []);

    const loadSubsidiaries = async () => {
        const data = await subsidaryService.getSubsidaries();
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
        console.log('handled child ebent');
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
                    <div className="col-lg-4">
                        <label>Financial Year</label>&nbsp;
                        <select className="form-control" onChange={(e) => setFin(e)}>
                            <option value="2023">2023-24</option>
                            <option value="2022">2022-23</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        {subsidiaries?.length > 0 && (
                            <>
                                <label>Subsidiary</label>&nbsp;
                                <select
                                    className="form-control"
                                    value={selectedSubsidiary}
                                    onChange={(e) => setSubsidiary(e?.target?.value)}
                                >
                                    <option value="">--SELECT--</option>
                                    {subsidiaries.map((eachSubsidiary) => {
                                        return <option value={eachSubsidiary.id}>{eachSubsidiary.name}</option>;
                                    })}
                                </select>
                            </>
                        )}
                    </div>
                    <div className="col-lg-4" style={{ paddingTop: '20px' }}>
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
                            <h5 style={{ textAlign: 'center' }} className='p-5'>Data Not Found.</h5>
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
