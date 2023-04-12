import { useEffect, useState } from 'react';
// material-ui
import { Box, Stack, TableContainer, Typography } from '@mui/material';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, Pager, Paging, SearchPanel, Editing } from 'devextreme-react/data-grid';
import Dot from 'components/@extended/Dot';
import { Lookup, Popup, RequiredRule } from '../../../node_modules/devextreme-react/data-grid';
const pageSizes = [10, 25, 50, 100];
import MainCard from 'components/MainCard';
// service
import headService from 'services/head.service';
import subsidaryService from 'services/subsidary.service';
import reportService from 'services/report.service';

export const Report = () => {
    const [mattrix, setMattrix] = useState([]);
    const [subsidaries, setSubsidaries] = useState([]);
    const [subsidaryMatrix, setSubsidaryMatrix] = useState([]);
    useEffect(() => {
        loadMattrix();
        loadSubsidaries();
        loadSubMatrix();
    }, []);

    const loadMattrix = async () => {
        const data = await headService.getMattrix();
        setMattrix(data?.data);
    };

    const loadSubMatrix = async () => {
        const data = await subsidaryService.getSubsidaryMattrix();
        console.log('loadmaxxx', data);
        setSubsidaryMatrix(data?.data);
    };

    const loadSubsidaries = async () => {
        const data = await subsidaryService.getSubsidaries();
        setSubsidaries(data?.data);
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
                    <DataGrid
                        dataSource={reportService.reportStore}
                        allowColumnReordering={true}
                        rowAlternationEnabled={true}
                        showBorders={true}
                    >
                        <Editing mode="popup" allowAdding={true} allowDeleting={false} allowUpdating={true}>
                            <Popup title="Head" showTitle={true} />
                        </Editing>
                        <SearchPanel visible={true} highlightCaseSensitive={true} />
                        <Column dataField="head_name" width={200}>
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[0].month_value" caption="April">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[1].month_value" caption="May">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[2].month_value" caption="June">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[3].month_value" caption="July">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[4].month_value" caption="Aug">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[5].month_value" caption="Sept">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[6].month_value" caption="Oct">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[7].month_value" caption="Nov">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[8].month_value" caption="Dec">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[9].month_value" caption="Jan">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[10].month_value" caption="Feb">
                            <RequiredRule />
                        </Column>
                        <Column dataField="data[11].month_value" caption="March">
                            <RequiredRule />
                        </Column>

                        <Paging />
                    </DataGrid>
                </MainCard>
            </TableContainer>
        </Box>
    );
};
