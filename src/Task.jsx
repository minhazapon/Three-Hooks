// Import necessary libraries and components
import React, { useState } from 'react';
import { Drawer } from 'antd';
import 'tailwindcss/tailwind.css';

const initialItems = [
    { id: 1, title: 'Red', color: '#FF0000' },
    { id: 2, title: 'Green', color: '#00FF00' },
    { id: 3, title: 'Blue', color: '#0000FF' },
];

const TabsComponent = () => {
    const [items, setItems] = useState(initialItems);
    const [showMenu, setShowMenu] = useState(null);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [newItem, setNewItem] = useState({ title: '', color: '#000000' });
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (index) => {
        setDraggedItem(index);
    };

    const handleDragOver = (index) => {
        const draggedOverItem = items[index];

        if (draggedItem === index) {
            return;
        }
        const newItems = items.filter((_, idx) => idx !== draggedItem);
        newItems.splice(index, 0, items[draggedItem]);

        setDraggedItem(index);
        setItems(newItems);
    };

    const addItem = () => {
        setEditingItem(null);
        setNewItem({ title: '', color: '#000000' });
        setDrawerVisible(true);
    };

    const editItem = (item) => {
        setEditingItem(item);
        setNewItem({ title: item.title, color: item.color });
        setDrawerVisible(true);
    };

    const duplicateItem = (item) => {
        const newItem = { ...item, id: items.length + 1, title: `${item.title} Copy` };
        setItems([...items, newItem]);
    };

    const deleteItem = (item) => {
        setItems(items.filter((i) => i.id !== item.id));
    };

    const saveItem = () => {
        if (editingItem) {
            setItems(
                items.map((item) => (item.id === editingItem.id ? { ...item, ...newItem } : item))
            );
        } else {
            setItems([...items, { ...newItem, id: items.length + 1 }]);
        }
        setDrawerVisible(false);
    };

    return (
        <div className="p-4 max-w-md mx-auto mt-28">


            <div>
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center p-2 border rounded mb-2 bg-white hover:shadow"
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => {
                            e.preventDefault();
                            handleDragOver(index);
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span>{item.title}</span>
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => setShowMenu(item.id)}
                            onMouseLeave={() => setShowMenu(null)}
                        >
                            <button className="p-1">...</button>
                            {showMenu === item.id && (
                                <div className="absolute right-0 top-8 bg-white border rounded shadow-md">
                                    <button className="block px-4 py-2 hover:bg-gray-100" onClick={() => editItem(item)}>Edit</button>
                                    <button className="block px-4 py-2 hover:bg-gray-100" onClick={() => duplicateItem(item)}>Duplicate</button>
                                    <button className="block px-4 py-2 hover:bg-gray-100" onClick={() => deleteItem(item)}>Delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>


            <button className="px-4 py-2 bg-green-500 text-white rounded mb-4 w-full" onClick={addItem}>Add++</button>

            <Drawer
                title={editingItem ? 'Edit Item' : 'Add Item'}
                placement="right"
                onClose={() => setDrawerVisible(false)}
                visible={drawerVisible}
            >
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        className="w-full border p-2 rounded"
                        value={newItem.title}
                        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Color</label>
                    <input
                        className="w-full border p-2 rounded"
                        type="color"
                        value={newItem.color}
                        onChange={(e) => setNewItem({ ...newItem, color: e.target.value })}
                    />
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={saveItem}>Save</button>
            </Drawer>
        </div>
    );
};

export default TabsComponent;
