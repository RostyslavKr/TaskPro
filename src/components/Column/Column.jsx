import { useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';
import { CardForm } from 'components/forms/CardForm/CardForm';
import { updateColumnTitle, deleteColumn, addTask } from 'redux/boards/operations';
import Tooltip from '@mui/material/Tooltip';
import Task from 'components/Task/Task';
import Icon from '../Icon';
import Button from "components/Button/Button";
import css from './Column.module.css';
import { useModal } from "hooks/useModal";
import { setFilter } from "redux/boards/selectors";

export const Column = ({
  allColumns,
  data,
}) => {
  const {getModal, killModal} = useModal();
  const dispatch = useDispatch();
  const filter = useSelector(setFilter);

  const handleEditColumn = value => {
    killModal();
    dispatch(updateColumnTitle({...data, ...value}));
  }
  const handleAddTask = value => {
    dispatch(addTask({_id:data._id, body:value}))
    killModal();
  }
  const handleDelete = () => dispatch(deleteColumn(data._id));
  
  const avaliableColumns = useMemo(() => {
    const newColumns = {...allColumns};
    delete newColumns[data._id];
    return newColumns;
  }, [allColumns, data]);

  return (
    <>
    <section className={css.containerColumn}>
      <div className={css.wrapperTitleColumn}>
        <h3 className={css.titleColumn}>{data.title}</h3>
        <div className={css.wrapperButton}>
        <Tooltip title="Edit">
          <button
            className={css.buttonColumn}
            type="button"
            onClick={() => getModal("Edit column", 
            <ColumnForm defaultValues={{title:data.title}} setTitle={handleEditColumn} />
            )}>
            <Icon name={'#pencil-icon'} />
            </button>
            </Tooltip>
            <Tooltip title="Delete">
            <button className={css.buttonColumn} onClick={handleDelete}>
            <Icon name={'#trash-icon'} />
            </button>
            </Tooltip>
          </div>
        </div>

      {data.tasks.length > 0 && (
      <div className={css.columnMiddle}>
      <ul className={css.listTask}>
        {
          data.tasks
          .filter((task) => !filter || task.priority === filter)
          .map((task, idx) => 
            (
              <Task
                avaliableColumns={avaliableColumns}
                index={idx}
                key={task._id}
                taskData={task}
                colId={data._id}
/*                 columnList={[{name: 'todo'}, {name: 'Done'}]} */
              />
            )
          )}
      </ul>
      </div>
      )}

      <Button title="Add another card" type="button" 
      action={() => getModal("Add card", <CardForm setTask={handleAddTask} />
      )}/>
    </section>
    </>
  );
};
