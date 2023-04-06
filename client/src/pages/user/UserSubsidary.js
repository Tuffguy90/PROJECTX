import React from 'react';
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
import subsidaryService from 'services/subsidary.service';
import authService from 'services/auth.service';
export const UserSubsidary = () => {
    const [user,setUser] = useState([]);
    const [subsidary,setSubsidary] = useState([]);
    useEffect(()=>{
        authService.getUserList().then(e=>{
            setUser(e?.data?.data?.data);
        })
        subsidaryService.formattedSubSidaryList().then(e=>{
            setSubsidary(e.data);
        })
    },[])
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
                    <h1>User Subsidary Mappings</h1>
                    <DataGrid
                        dataSource={subsidaryService.userSubsidary}
                        allowColumnReordering={true}
                        rowAlternationEnabled={true}
                        showBorders={true}
                    >
                        <Editing mode="popup" allowAdding={true} allowDeleting={true} allowUpdating={false}>
                            <Popup title="User Subsidary Mappings" showTitle={true} />
                        </Editing>
                        <SearchPanel visible={true} highlightCaseSensitive={true} />
                        <Column dataField="id" visible={false} allowAdding={false} allowEditing={false}></Column>
                        <Column dataField="user_id" caption="User Name" >
                            <RequiredRule />
                            <Lookup dataSource={user} displayExpr="first_name" valueExpr="id" />
                        </Column>
                        <Column dataField="subsidary_id" caption="Subsidary Name">
                            <RequiredRule />
                            <Lookup dataSource={subsidary} displayExpr="h_name" valueExpr="id" />
                        </Column>
                        <Paging />
                    </DataGrid>
                </MainCard>
            </TableContainer>
        </Box>
    );
};
