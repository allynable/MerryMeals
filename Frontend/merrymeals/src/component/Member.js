import React, { useState, useEffect } from "react";
import memberService from "../service/MemberService";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";

const Member = () => {
  const { memberId } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      const response = await memberService.getMemberById(memberId);
      const memberData = response.data;
      setMember(memberData);
    };

    fetchMember();
  }, [memberId]);

  if (!member) {
    return <div>Loading...</div>;
  }
  function reverseGeocodeAddress(latitude, longitude) {
    var geocoder = new window.google.maps.Geocoder();
    var lat = parseFloat(latitude);
    var long = parseFloat(longitude);

    if (isNaN(lat) || isNaN(long)) {
      toast.error("Please enter valid coordinates.");
      return;
    }

    var location = new window.google.maps.LatLng(lat, long);

    geocoder.geocode({ location: location }, function (results, status) {
      if (status === "OK") {
        if (results[0]) {
          var formattedAddress = results[0].formatted_address;
          var modifiedAddress = formattedAddress.replace(/\s\w+\+\w+/g, "");
          var tdElement = document.getElementById("address");
          tdElement.textContent = modifiedAddress;
        } else {
          toast.error("No results found.");
        }
      } 
    });
  }
  return (
    <section>
      <Container>
        <h1 className="my-3">Member Information</h1>

        <Table bordered className="table table-rounded">
          <thead>
            <tr class="table-dark">
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{member.firstName}</td>
              <td id="address">{reverseGeocodeAddress(member.latitude, member.longitude)}</td>
              <td>{member.contactNumber}</td>
              <td>{member.condition}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Member;
