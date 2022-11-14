using System.ComponentModel.DataAnnotations;

namespace CSCI3110BootstrapIntro.Models;

public enum Gender { Female, Male }
public class Pet
{
    [Required]
    public string Name { get; set; } = String.Empty;
    public string? Type { get; set; }
    public Gender Gender { get; set; }
    public bool IsNeutered { get; set; }
}

