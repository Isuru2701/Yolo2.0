import React from "react";

export default function ManageCollections() {

    var collections = [
        { id: 1, name: 'Collection 1' },
        { id: 2, name: 'Collection 2' },
        { id: 3, name: 'Collection 3' },
        { id: 4, name: 'Collection 4' },
        { id: 5, name: 'Collection 5' },
        { id: 6, name: 'Collection 6' }

    ];

    const fetchCollections = async () => {

    }

    const deleteCollection = async () => {
    }


    return (
        <div className='requests-container'>
            <h1>Manage Collections</h1>
            <div className="requests-grid">

                {collections.map((collection) => (
                    <div key={collection.id} className="request">
                        {collection.name}
                        <h1>Title</h1>
                        <p></p>
                        <p>Description</p>

                        <button onClick={() => window.location.href = '/collection'}>View</button>
                        <button onClick={() => window.location.href = '/collection'}>Edit</button>
                        <button className='reject' onClick={deleteCollection}>Reject</button>
                    </div>
                ))}
            </div>
        </div>
    );
}