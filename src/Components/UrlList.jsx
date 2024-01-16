export default function UrlList({index,longUrl,shortUrl,createdOn}){
     //reducing longurl to maximum string size
    const original=longUrl.slice(0,30)+"...";
    return (

  <table className="table skeleton mb-1 mt-2 text-secondary ">
    <tbody>
      <tr className="list-section">
        <th className="text-start ">{index+1}</th>
        <td className="text-start">{shortUrl}</td>
        <td className="text-start">{original}</td>
        <td className="text-start">{createdOn}</td>
      </tr>
    </tbody>
  </table>


    )
}