import { useEffect, useState } from 'react';
// material-ui
import { Box, Stack, TableContainer, Typography } from '@mui/material';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, Pager, Paging, SearchPanel, Editing, Export, Selection, Summary, TotalItem } from 'devextreme-react/data-grid';
import Dot from 'components/@extended/Dot';
import { Lookup, Popup, RequiredRule } from '../../../node_modules/devextreme-react/data-grid';

const pageSizes = [10, 25, 50, 100];
import MainCard from 'components/MainCard';
// service
import headService from 'services/head.service';
import subsidaryService from 'services/subsidary.service';
import reportService from 'services/report.service';
import Swal from 'sweetalert2';

export const Report = () => {
    const [mattrix, setMattrix] = useState([]);
    const [subsidaries, setSubsidaries] = useState([]);
    const [mattrixs, setMattrixs] = useState([]);
    // const [subsidaryMatrix, setSubsidaryMatrix] = useState([]);
    const [reportData, setReportData] = useState([]);
    const [selectedSubsidary, setSubsidary] = useState(1);
    const [selectedFin, setFin] = useState(null);
    let loginUserData = JSON.parse(localStorage.getItem('_userData'));
    useEffect(() => {
        let subId = selectedSubsidary;
        loginUserData.role_id === 1 ? loadSubsidaries() : (subId = loginUserData?.subsidary?.id);
        setSubsidary(subId);
        loadReport(new Date().getFullYear(), subId);
        loadMattrix();
        // loadSubMatrix();
    }, []);

    const loadMattrix = async () => {
        const data = await headService.getMattrix();
        setMattrix(data?.data);
    };

    // const loadSubMatrix = async () => {
    //     const data = await subsidaryService.getSubsidaryMattrix();
    //     console.log('loadmaxxx', data);
    //     setSubsidaryMatrix(data?.data);
    // };

    const loadSubsidaries = async () => {
        const data = await subsidaryService.getSubsidaries();
        setSubsidaries(data?.data);
    };
    const loadReport = async (financial_year, subsidary_id) => {
        const report = reportService.reportStore(financial_year, subsidary_id);
        setReportData(report);
    };

    const statusCell = (options) => {
        const color = options.data?.status === 1 ? 'success' : 'danger';
        const title = options.data?.status === 1 ? 'Active' : 'Inactive';
        return (
            <Stack direction="row" spacing={1} alignItems="center">
                <Dot color={color} />
                <Typography>{title}</Typography>
            </Stack>
        );
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

    const handleSubmit = () => {
        const year = new Date().getFullYear();
        console.log('year', year);
        if (!selectedSubsidary) {
            Swal.fire('Validation Error', 'You must select subsidary first');
            return;
        }
        loadReport(selectedFin?.target?.value || year, selectedSubsidary || 0);
    };
    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <MainCard sx={{ m: 1, p: 1 }} content={false}>
                    <h1>Report</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>Financial Year</label>&nbsp;
                            <select className="form-control" onChange={(e) => setFin(e)}>
                                <option value="2023">2023-24</option>
                                <option value="2022">2022-23</option>
                            </select>
                        </div>
                        <div className="col-lg-4">
                            {subsidaries?.length > 0 && (
                                <>
                                    <label>Subsidary</label>&nbsp;
                                    <select
                                        className="form-control"
                                        value={selectedSubsidary}
                                        onChange={(e) => setSubsidary(e.target.value)}
                                    >
                                        <option value="">--SELECT--</option>
                                        {subsidaries.map((eachSubsidary) => {
                                            return <option value={eachSubsidary.id}>{eachSubsidary.name}</option>;
                                        })}
                                    </select>
                                </>
                            )}
                        </div>

                        <div className="col-lg-4" style={{ marginTop: '21px' }}>
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="mt-1">
                        <DataGrid
                            dataSource={reportData}
                            onCellPrepared={(e) => {
                                //console.log('eee', e);
                                if (e.rowType !== 'data' || e.columnIndex != 1) {
                                    return;
                                }

                                // if (isGroup?.length > 0 && mattrixs.length >= 2) {
                                //     e.cellElement.rowSpan = isGroup[0]['count'];
                                //     e.cellElement.innerHTML = '<div>My Text</div>';
                                // }
                                // if (e.rowIndex % 5 === 0) {
                                //     e.cellElement.rowSpan = 5;
                                //     e.cellElement.innerHTML = '<div>My Text</div>';
                                // } else {
                                //     e.cellElement.style.display = 'none';
                                // }
                            }}
                            allowColumnReordering={true}
                            rowAlternationEnabled={true}
                            showBorders={true}
                        >
                            <Editing mode="cell" allowAdding={false} allowDeleting={false} allowUpdating={true}>
                                <Popup title="Head" showTitle={true} />
                            </Editing>
                            <SearchPanel visible={true} highlightCaseSensitive={true} />
                            <Column dataField="mattrix_name" width={160} allowEditing={false}></Column>
                            <Column dataField="head_name" width={180} allowEditing={false}></Column>
                            <Column dataField="target" allowEditing={false} width={75}></Column>
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
                            {/* <Summary>
                                <TotalItem column="head_name" summaryType="sum" customizeText={() => 'Sum'} />
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((e) => {
                                    const i = `data[${e}].month_value`;
                                    return <TotalItem column={i} summaryType="sum" customizeText={customSum} />;
                                })}
                            </Summary> */}

                            <Paging />
                        </DataGrid>
                    </div>
                </MainCard>
            </TableContainer>
        </Box>
    );
};
