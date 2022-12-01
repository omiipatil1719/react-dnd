import React, { useEffect, useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import { sendApiData } from './User';

const SortableItem = SortableElement(({ value }) => <div className='listData'> <li>{value}</li> </div>);
console.log()

const SortableList = SortableContainer(({ items }) => {

  console.log(items)

  return (
    <>
    <div className='flex'>
    <ul className='ullist'>
    <h1>React Drag and Drop</h1>

      {items.map((value, index) => (
        console.log(value.id, index, "value,index "),
        <SortableItem key={`item-${value.id}`} index={index} value={value.title}
        />
      ))}
    </ul>
    </div>
    </>
  );
});

const DragDrop = () => {

  const [item, setitem] = useState([])

  // console.log(item, "error")


  const GetApiData = async () => {
    try {
      const resp11 = await sendApiData();
      // console.log(resp11.data, "resp11")
      setitem(resp11.data)

    } catch (error) {

    }


  }



  useEffect(() => {
    GetApiData()
  }, [])


  const onSortEnd = ({ oldIndex, newIndex }) => {
    setitem(arrayMoveImmutable(item, oldIndex, newIndex));
  };


  return (
    <>

      <SortableList items={item} onSortEnd={onSortEnd} />;</>

  )

}

export default DragDrop;

