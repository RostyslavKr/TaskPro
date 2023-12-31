import { useDispatch, useSelector } from 'react-redux';
import { ColumnForm } from 'components/forms/ColumnForm/ColumnForm';
import { CardForm } from 'components/forms/CardForm/CardForm';
import { updateColumnTitle, deleteColumn, addTask } from 'redux/boards/operations';
import Task from 'components/Task/Task';
import Icon from '../Icon';
import Button from "components/Button/Button";
import css from './Column.module.css';
import { useModal } from "hooks/useModal";
import { setFilter } from "redux/boards/selectors";
import { StrictModeDroppable } from "utils/StrictModeDroppable";
import { Draggable } from "react-beautiful-dnd";

export const Column = ({
/*   allColumns, */
  index,
  data
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

  return (
    <Draggable draggableId={data._id} index={index}>
      {(provided) => (
    <section className={css.containerColumn} {...provided.draggableProps} ref={provided.innerRef}>
      <div className={css.wrapperTitleColumn} {...provided.dragHandleProps}>
        <h3 className={css.titleColumn}>{data.title}</h3>
        <div className={css.wrapperButton}>
          <button
            className={css.buttonColumn}
            type="button"
            onClick={() => getModal("Edit column", 
            <ColumnForm defaultValues={{title:data.title}} setTitle={handleEditColumn} />
            )}>
            <Icon name={'#pencil-icon'} tip="Edit" />
          </button>
          <button className={css.buttonColumn} onClick={handleDelete}>
            <Icon name={'#trash-icon'} tip="Delete" />
          </button>
          </div>
        </div>

      
        <StrictModeDroppable droppableId={data._id} type="task">
          {(provided) => (
        <div className={css.columnMiddle} ref={provided.innerRef} {...provided.droppableProps}>
       <div className={css.listTask}>
        { data.tasks
          .filter((task) => !filter || task.priority === filter)
          .map((task, idx) => 
            (
              <Task
                index={idx}
                key={task._id}
                taskData={task}
                colId={data._id}
              />
            )
          )}
          {provided.placeholder}
      </div>
      </div>     
      )}
      </StrictModeDroppable >


      <Button title="Add another card" type="button" 
      action={() => getModal("Add card", <CardForm setTask={handleAddTask} />
      )}/>
    </section>
/*     </div> */
    )}
    </Draggable>
  );
};
