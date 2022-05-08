import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = useInventory()
    const navigate = useNavigate();

    const viewInventory = () => {
        navigate('/stock');
    }
    return (
        <div className='container mb-5'>
            <div className='m-3'>
                <h3 className='text-center'>Top Inventory</h3>
                <div className='row'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </div>
            <button onClick={viewInventory} className='btn btn-primary'>Manage Inventory</button>
        </div>
    );
};

export default Inventories;