using System.ComponentModel.DataAnnotations;

namespace MyApp.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,15}$",
                        ErrorMessage="Invalid Password Format")]
        public string Password { get; set; }
    }
}