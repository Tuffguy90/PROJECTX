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

export const HeadMaster = () => {
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
                    <h1>Heads</h1>
                    <DataGrid
                        dataSource={headService.headMasterStore}
                        allowColumnReordering={true}
                        rowAlternationEnabled={true}
                        showBorders={true}
                    >
                        <Editing mode="popup" allowAdding={true} allowDeleting={false} allowUpdating={true}>
                            <Popup title="Head" showTitle={true} />
                        </Editing>

                        <SearchPanel visible={true} highlightCaseSensitive={true} />
                        <Column dataField="id" visible={false} allowAdding={false} allowEditing={false}></Column>
                        <Column dataField="head_name">
                            <RequiredRule />
                        </Column>
                        <Column dataField="target" dataType="number">
                            <RequiredRule />
                        </Column>
                        <Column dataField="financial_year" dataType="number">
                            <RequiredRule />
                        </Column>
                        <Column dataField="subsidary_id" caption="Subsidary">
                            <RequiredRule />
                            <Lookup dataSource={subsidaries} displayExpr="name" valueExpr="id" />
                        </Column>
                        <Column dataField="mattrix_id" caption="Mattrix">
                            <RequiredRule />
                            <Lookup dataSource={mattrix} displayExpr="name" valueExpr="id" />
                        </Column>

                        <Column dataField="status" dataType="number" cellRender={statusCell}>
                            <Lookup
                                dataSource={[
                                    {
                                        value: 1,
                                        label: 'Active'
                                    },
                                    {
                                        value: 0,
                                        label: 'In Active'
                                    }
                                ]}
                                displayExpr="label"
                                valueExpr="value"
                            />
                        </Column>
                        <Paging />
                    </DataGrid>
                </MainCard>
            </TableContainer>
        </Box>
    );
};
