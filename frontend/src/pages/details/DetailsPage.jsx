import React, { Component } from 'react';
import ShopHeader from '../../components/header/ShopHeader';
import CarDetails from '../../components/cardetails/CarDetails';

class DetailsPage extends Component {


    render = () => {
        const car  = {
            id: "5ed649fd96119325cc565fc1",
            slug: "Volvo-850-1995-65fc",
            make: "Volvo",
            model: "850",
            warehouse: "Warehouse C",
            locationName: "Suid wing",
            location: {
                latitude: 39.12788,
                longitude: -2.71398
            },
            yearModel: "1995",
            price: 25762.08,
            licensed: true,
            dateAdded: "2017-10-02"
            };
        return (
            <div>
                <ShopHeader title="Frank's Car Shop" subtitle="Here you find your best deal" />
                <div className="Main">
                    <CarDetails car={car} />
                </div>
            </div>
        );
    }
}

export default DetailsPage;