import React, {useState} from 'react'

const Index = () => {
    const intialArray = [
        {
          id: "sdhaffsdkfjas",
          firstName: "Shekar",
          lastName: "Gayam",
          age: 27,
        },
        {
          id: "ksafewyiasere",
          firstName: "Kiran",
          lastName: "Palla",
          age: 27,
        },
        {
          id: "35232fsf",
          firstName: "Harsha",
          lastName: "Yenumula",
          age: 29,
        }
      ];

      const [data, setData] = useState(intialArray);
      console.log(data);

      const handleDelete = (comingId) => {
        const filterData = data.filter((eachItem) => {
          return eachItem.id !== comingId;
        });
        setData(filterData);
      };
    
      return (
        <div>
          <ul>
            {data.map((eachItem, index) => {
              const { firstName, lastName, age, id } = eachItem;
              return (
                <li key={index}>
                  <div>
                    my firstName <strong>{firstName}</strong>
                  </div>
                  <div>
                    my lastName <strong> {lastName}</strong>
                  </div>
                  <div>
                    my age <strong>{age}</strong>
                  </div>
                  <button onClick={() => handleDelete(id)}>delete me</button>
                </li>
              );
            })}
          </ul>
        </div>
    );
}

export default Index
