import { useEffect, useState } from 'react';
// material-ui
import { Box, Stack, TableContainer, Typography } from '@mui/material';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, Pager, Paging, SearchPanel, Editing } from 'devextreme-react/data-grid';
import MainCard from 'components/MainCard';
// service
import subsidaryService from 'services/subsidary.service';
import Dot from 'components/@extended/Dot';
import { Lookup, Popup, RequiredRule } from '../../../node_modules/devextreme-react/data-grid';

export const ChildSubsidiary = () => {
    const [parentSubsidiaryList, setParentSubsidiaryList] = useState([]);
    const [selectedSubsidary, setSubsidary] = useState(1);
    useEffect(() => {
        subsidaryService.getSubsidiariesList(selectedSubsidary).then((response) => {
            setParentSubsidiaryList(response?.data?.data);
        });
    }, []);

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

    const handleSubmit = () => {
        const year = new Date().getFullYear();
        if (!selectedSubsidary) {
            Swal.fire('Validation Error', 'You must select subsidiary first');
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
                    <h1>Child Subsidiaries</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            {parentSubsidiaryList?.length > 0 && (
                                <>
                                    <label>Subsidary</label>&nbsp;
                                    <select
                                        className="form-control"
                                        value={selectedSubsidary}
                                        onChange={(e) => setSubsidary(e.target.value)}
                                    >
                                        <option value="">--Select--</option>
                                        {parentSubsidiaryList.map((eachSubsidary) => {
                                            return (
                                                <option key={eachSubsidary.id} value={eachSubsidary.id}>
                                                    {eachSubsidary.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </>
                            )}
                        </div>
                    </div>
                    <DataGrid
                        dataSource={subsidaryService.subsidaryStore(2, selectedSubsidary)}
                        allowColumnReordering={true}
                        rowAlternationEnabled={true}
                        showBorders={true}
                    >
                        <Editing mode="popup" allowAdding={true} allowDeleting={false} allowUpdating={true}>
                            <Popup title="Subsidary" showTitle={true} />
                        </Editing>
                        <SearchPanel visible={true} highlightCaseSensitive={true} />
                        <Column dataField="id" visible={false} allowAdding={false} allowEditing={false}></Column>
                        <Column dataField="name">
                            <RequiredRule />
                        </Column>
                        <Column dataField="parent_id" caption="Parent Name">
                            <RequiredRule />
                            <Lookup dataSource={parentSubsidiaryList} displayExpr="name" valueExpr="id" />
                        </Column>
                        <Column dataField="code">
                            <RequiredRule />
                        </Column>
                        <Column dataField="short_name">
                            <RequiredRule />
                        </Column>
                        <Column dataField="email">
                            <RequiredRule />
                        </Column>
                        <Column dataField="mobile">
                            <RequiredRule />
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
                    </DataGrid>
                </MainCard>
            </TableContainer>
        </Box>
    );
};
