import React from 'react'
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
import matrixService from 'services/matrix.service';
import headService from 'services/head.service';
import subsidaryService from 'services/subsidary.service';

export const SubsidaryMatrixMap = () => {
    const [mattrix, setMattrix] = useState([]);
    const [subsidaries, setSubsidaries] = useState([]);
    useEffect(() => {
        loadMattrix();
        loadSubsidaries();
    }, []);

    const loadMattrix = async () => {
        const data = await headService.getMattrix();
        setMattrix(data?.data);
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
                <h1>Subsidary Matrix Mapping</h1>
                <DataGrid
                    dataSource={matrixService.subMatStore}
                    allowColumnReordering={true}
                    rowAlternationEnabled={true}
                    showBorders={true}
                >
                    <Editing mode="popup" allowAdding={true} allowDeleting={false} allowUpdating={true}>
                        <Popup title="Subsidary Matrix Mapping" showTitle={true} />
                    </Editing>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <Column dataField="subsidary_id" caption="Subsiary Name">
                        <RequiredRule />
                        <Lookup dataSource={subsidaries} displayExpr="name" valueExpr="id" />
                    </Column>
                    <Column dataField="mattrix_id" caption="Matrix Name">
                        <RequiredRule />
                        <Lookup dataSource={subsidaries} displayExpr="name" valueExpr="id" />
                    </Column>
                    {/* <Column dataField="status" dataType="number" cellRender={statusCell}>
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
                    </Column> */}
                    <Paging />
                </DataGrid>
            </MainCard>
        </TableContainer>
    </Box>
    )
}
