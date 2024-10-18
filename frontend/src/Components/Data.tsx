function Data() {

    const data = JSON.parse(localStorage.getItem('formData') || '{}');

    return (
        <div className="h-[91vh] bg-gray-200">
            <h1 className="text-center text-4xl font-bold text-[#ef0713]">Data</h1>
            <div className="flex flex-col items-center">
                <div className="w-1/2 bg-white p-4 rounded-lg mt-4">
                    <h1 className="text-xl font-bold">First Name: {data.firstName}</h1>
                    <h1 className="text-xl font-bold">Last Name: {data.lastName}</h1>
                    <h1 className="text-xl font-bold">Email: {data.email}</h1>
                    <h1 className="text-xl font-bold">Contact: {data.contact}</h1>
                    <h1 className="text-xl font-bold">Gender: {data.gender}</h1>
                    <h1 className="text-xl font-bold">Subject: {data.subject.join(', ')}</h1>
                    <h1 className="text-xl font-bold">Resume: {data.resume?.name}</h1>
                    <h1 className="text-xl font-bold">URL: {data.url}</h1>
                    <h1 className="text-xl font-bold">Choice: {data.choice}</h1>
                    <h1 className="text-xl font-bold">About: {data.about}</h1>
                </div>
            </div>

        </div>
    )
}

export default Data;