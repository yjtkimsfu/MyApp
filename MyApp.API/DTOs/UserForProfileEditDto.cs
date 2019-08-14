using System;
using System.Collections.Generic;

namespace MyApp.API.DTOs
{
    public class UserForProfileEditDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Zipcode { get; set; } 
        public int PhoneNumber { get; set; }
        public string email { get; set; }
        public string PhotoUrl { get; set; }
        public ICollection<PhotoForDetailedDto> Photos { get; set; }
    }
}