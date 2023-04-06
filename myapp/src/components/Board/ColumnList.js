import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Column from './Column';
import {getTemplateAction} from '../../store/actions/templateActions'


const ColumnList = ({board}) => {
    const dispatch = useDispatch();
    const boardTemplate = useSelector(state => state.template.boardTemplate);
    const boardTemplateError = useSelector(state => state.template.boardTemplateError);
    useEffect(() => {
        dispatch(getTemplateAction(board.template));
    },[]);
    return (
       <div className="columns">
           {
               boardTemplateError ? (
                <p>{boardTemplateError}</p>
               ) : (
                    <div className="column-container">
                      {
                          boardTemplate && boardTemplate.columns.map(column => {
                              return (
                                  <Column name={column} board={board} />
                              )
                          })
                      }
                   </div>
               )
           }
       </div>
    );
}

export default ColumnList;