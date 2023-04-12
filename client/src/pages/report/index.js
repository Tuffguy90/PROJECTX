import { useEffect, useState } from 'react';
// material-ui
import { Box, Stack, TableContainer, Typography } from '@mui/material';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, {
    Column,
    Pager,
    Paging,
    SearchPanel,
    Sorting,
    Editing,
    Export,
    Selection,
    Summary,
    TotalItem
} from 'devextreme-react/data-grid';
import Dot from 'components/@extended/Dot';
import { Lookup, Popup, RequiredRule } from '../../../node_modules/devextreme-react/data-grid';
const pageSizes = [10, 25, 50, 100];
import MainCard from 'components/MainCard';
// service
import headService from 'services/head.service';
import subsidaryService from 'services/subsidary.service';
import reportService from 'services/report.service';
import Swal from 'sweetalert2';

export const Report = ({ onSearch, hideSearchBar, onChildEvent }) => {
    const [mattrix, setMattrix] = useState([]);
    const [subsidaries, setSubsidaries] = useState([]);
    const [mattrixs, setMattrixs] = useState([]);
    const [reportData, setReportData] = useState([]);
    const [selectedParentSubsidiary, setParentSubsidiary] = useState('');
    const [selectedSubsidiary, setSubsidiary] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [childSubsidiary, setChildSubsidiary] = useState([]);
    const [selectedFin, setFin] = useState(null);
    const [canEdit, setCanEdit] = useState(false);
    const [financialYearList, setFinancialYearList] = useState([]);
    let loginUserData = JSON.parse(localStorage.getItem('_userData'));
    useEffect(() => {
        loadReport(onSearch?.financial_year, onSearch?.selected_subsidary);
        let selectedFin = {
            target: {
                value: onSearch?.financial_year
            }
        };
        if (onSearch?.financial_year) setFin(selectedFin);
    }, [onSearch]);

    useEffect(() => {
        let subId = selectedSubsidiary;
        !loginUserData.subsidary || loginUserData.subsidary.length === 0 ? loadSubsidaries() : setSubsidaries(loginUserData.subsidary);
        setSubsidiary(subId);
        loadReport(new Date().getFullYear(), subId);
        loadMattrix();
        setCanEdit(loginUserData.is_edit === 1 ? true : false);
        // loadSubMatrix();
        reportService.getFinancialYearList().then(({ data }) => {
            setFinancialYearList(data?.data);
        });
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
        const data = await subsidaryService.getSubsidaries(1);
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
    const handleEvent = () => {
        console.log('handled and passed');
        onChildEvent(true);
    };
    const handleSubmit = () => {
        const year = new Date().getFullYear();
        if (!selectedSubsidiary) {
            Swal.fire('Validation Error', 'You must select subsidary first');
            return;
        }
        loadReport(selectedFin?.target?.value || year, selectedSubsidiary);
    };

    const checkChildSubsidiary = (subId) => {
        let child = subsidaries.filter((item) => {
            if (subId == item?.id) return item;
        });
        setChildSubsidiary(child[0]?.child_subsidiary);
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
                    {hideSearchBar !== true ? (
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Report</h1>
                            </div>
                            <div className="col-lg-3">
                                <label>Financial Year</label>&nbsp;
                                <select className="form-control" onChange={(e) => setFin(e)}>
                                    <option value="">--SELECT--</option>
                                    {financialYearList?.map((years, index) => {
                                        return (
                                            <option key={index} value={years.financial_year}>
                                                {years.fin_name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-lg-3">
                                {subsidaries?.length > 0 && (
                                    <>
                                        <label>Subsidiary</label>&nbsp;
                                        <select
                                            className="form-control"
                                            value={selectedParentSubsidiary}
                                            onChange={(e) => (
                                                setSubsidiary(e.target.value),
                                                setParentSubsidiary(e?.target?.value),
                                                checkChildSubsidiary(e?.target?.value)
                                            )}
                                        >
                                            <option value="">--SELECT--</option>
                                            {subsidaries.map((eachSubsidary) => {
                                                return <option value={eachSubsidary.id}>{eachSubsidary.name}</option>;
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
                            <div className="col-lg-3" style={{ marginTop: '21px' }}>
                                <button className="btn btn-primary" onClick={handleSubmit}>
                                    Search
                                </button>
                            </div>
                        </div>
                    ) : null}
                    <div className="mt-1">
                        <DataGrid
                            dataSource={reportData}
                            onSaved={handleEvent}
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
                            <Sorting mode="none" />
                            <Editing mode="cell" allowAdding={false} allowDeleting={false} allowUpdating={canEdit}>
                                <Popup title="Head" showTitle={true} />
                            </Editing>
                            <SearchPanel visible={true} highlightCaseSensitive={true} />
                            <Column dataField="mattrix_name" width={150} allowEditing={false}></Column>
                            <Column dataField="head_name" width={120} allowEditing={false}></Column>
                            <Column dataField="target" allowEditing={false} width={60}></Column>
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
