export default function UrlList({index,longUrl,shortUrl,createdOn}){

    const original=longUrl.slice(0,30)+"...";
    // const date=createdOn.slice(0,10)
    return (

  <table className="table skeleton mb-1 mt-2 text-secondary">
    <tbody>
      <tr>
        <th className="text-start">{index+1}</th>
        <td className="text-start">{shortUrl}</td>
        <td className="text-center">{original}</td>
        <td className="text-end">{createdOn}</td>
      </tr>
    </tbody>
  </table>


    )
}