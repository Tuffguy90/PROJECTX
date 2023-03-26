import { useEffect, useMemo, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DataGrid, { Column, Paging, SearchPanel, Editing, Export, Summary, TotalItem } from 'devextreme-react/data-grid';
import IncomeAreaChart from './component/IncomeAreaChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import reportService from 'services/report.service';
import Swal from 'sweetalert2';
import subsidaryService from 'services/subsidary.service';
import { Popup } from '../../../node_modules/devextreme-react/data-grid';

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
        !loginUserData.hasOwnProperty('subsidary') ? loadSubsidiaries() : (subId = loginUserData?.subsidary?.id);
        setSubsidiary(subId);
        loadReport(new Date().getFullYear(), subId);
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

    const customSum = ({ value }) => {
        return value;
    };

    const Q1Cell = (options) => {
        const data = options.data?.data;
        let sum = 0;
        sum = parseInt(data[0]['month_value']) + parseInt(data[1]['month_value'] + data[2]['month_value']);
        return sum;
    };
    const Q2Cell = (options) => {
        const data = options.data?.data;
        let sum = 0;
        sum = parseInt(data[3]['month_value']) + parseInt(data[4]['month_value'] + data[5]['month_value']);
        return sum;
    };
    const Q3Cell = (options) => {
        const data = options.data?.data;
        let sum = 0;
        sum = parseInt(data[6]['month_value']) + parseInt(data[7]['month_value'] + data[8]['month_value']);
        return sum;
    };
    const Q4Cell = (options) => {
        const data = options.data?.data;
        let sum = 0;
        sum = parseInt(data[9]['month_value']) + parseInt(data[10]['month_value'] + data[11]['month_value']);
        return sum;
    };

    const loadReport = async (financial_year, subsidary_id) => {
        const report = reportService.reportStore(financial_year, subsidary_id);
        setReportData(report);
    };

    const handleSubmit = () => {
        let year = new Date().getFullYear();
        loadGraphData(selectedFin?.target?.value || year, selectedSubsidiary);
        loadReport(selectedFin?.target?.value || year, selectedSubsidiary);
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
                    <Box sx={{ pt: 1, pr: 2 }}>{graphData?.length > 0 && <IncomeAreaChart series={graphData} />}</Box>
                </MainCard>
            </Grid>

            {/* row 3 */}
            <Grid item xs={12} md={12} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Subsidiary Data</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    {/* <OrdersTable /> */}
                    <DataGrid dataSource={reportData} allowColumnReordering={true} rowAlternationEnabled={true} showBorders={true}>
                        <Editing mode="cell" allowAdding={false} allowDeleting={false} allowUpdating={true}>
                            <Popup title="Head" showTitle={true} />
                        </Editing>
                        <SearchPanel visible={true} highlightCaseSensitive={true} />
                        <Column dataField="head_name" width={200}></Column>
                        <Column dataField="data[0].month_value" caption="April"></Column>
                        <Column dataField="data[1].month_value" caption="May"></Column>
                        <Column dataField="data[2].month_value" caption="June"></Column>
                        <Column dataType="number" caption="Q1" cellRender={Q1Cell}></Column>
                        <Column dataField="data[3].month_value" caption="July"></Column>
                        <Column dataField="data[4].month_value" caption="Aug"></Column>
                        <Column dataField="data[5].month_value" caption="Sept"></Column>
                        <Column dataType="number" caption="Q2" cellRender={Q2Cell}></Column>
                        <Column dataField="data[6].month_value" caption="Oct"></Column>
                        <Column dataField="data[7].month_value" caption="Nov"></Column>
                        <Column dataField="data[8].month_value" caption="Dec"></Column>
                        <Column dataType="number" caption="Q3" cellRender={Q3Cell}></Column>
                        <Column dataField="data[9].month_value" caption="Jan"></Column>
                        <Column dataField="data[10].month_value" caption="Feb"></Column>
                        <Column dataField="data[11].month_value" caption="March"></Column>
                        <Column dataType="number" caption="Q4" cellRender={Q4Cell}></Column>
                        <Export enabled={true} />
                        <Summary>
                            <TotalItem column="head_name" summaryType="sum" customizeText={() => 'Sum'} />
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((e) => {
                                const i = `data[${e}].month_value`;
                                return <TotalItem column={i} summaryType="sum" customizeText={customSum} />;
                            })}
                        </Summary>

                        <Paging />
                    </DataGrid>
                </MainCard>
            </Grid>
        </Grid>
    );
};
export default Dashboard;
