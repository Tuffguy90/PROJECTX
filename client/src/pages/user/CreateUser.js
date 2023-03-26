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
import authService from 'services/auth.service';

const CreateUser = () => {
    const [subsidiaries, setSubsidiaries] = useState([]);
    useEffect(() => {
        loadSubsidiaries();
    }, []);
    const [permission, setPermission] = useState([
        {id:0,name:'False'},
        {id:1,name:'True'}
    ]);
    const loadSubsidiaries = async () => {
        const data = await subsidaryService.getSubsidaries();
        setSubsidiaries(data?.data);
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
                    <h1 style={{ margin: '0px' }}>User</h1>
                    <DataGrid
                        dataSource={authService.userCRUD}
                        allowColumnReordering={true}
                        rowAlternationEnabled={true}
                        showBorders={true}
                    >
                        <Editing mode="popup" allowAdding={true} allowDeleting={false} allowUpdating={true}>
                            <Popup title="User" showTitle={true} />
                        </Editing>
                        <SearchPanel visible={true} highlightCaseSensitive={true} />
                        <Column dataField="first_name" caption="First Name">
                            <RequiredRule />
                        </Column>
                        <Column dataField="last_name" caption="Last Name">
                            <RequiredRule />
                        </Column>
                        <Column dataField="email" allowEditing={true} caption="Email-Id">
                            <RequiredRule />
                        </Column>
                        <Column dataField="mobile" caption="Mobile">
                            <RequiredRule />
                        </Column>
                        <Column dataField="address" caption="Address">
                            <RequiredRule />
                        </Column>
                        <Column dataField="subsidary_id" caption="Subsidary">
                            <RequiredRule />
                            <Lookup dataSource={subsidiaries} displayExpr="name" valueExpr="id" />
                        </Column>
                        <Column dataField="is_add" caption="Can Add">
                            <RequiredRule />
                            <Lookup dataSource={permission} displayExpr="name" valueExpr="id" />
                        </Column>
                        <Column dataField="is_edit" caption="Can Edit">
                            <RequiredRule />
                            <Lookup dataSource={permission} displayExpr="name" valueExpr="id" />
                        </Column>
                        <Column dataField="is_delete" caption="Can Delete">
                            <RequiredRule />
                            <Lookup dataSource={permission} displayExpr="name" valueExpr="id" />
                        </Column>
                        <Column dataField="status" dataType="number" cellRender={statusCell}>
                            <RequiredRule />
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
export default CreateUser;
