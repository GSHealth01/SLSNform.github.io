import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    name: "",
    station: "",
    contact: "",
    specialty: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, specialty: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all MCQ questions are answered
    if (!formData.q1 || !formData.q2 || !formData.q3 || !formData.q4 || !formData.q5) {
      toast.error("Please answer all multiple choice questions");
      return;
    }

    // Validate all text inputs are filled
    if (!formData.q6.trim() || !formData.q7.trim() || !formData.q8.trim()) {
      toast.error("Please answer all brand name questions");
      return;
    }
    
    // Validate personal information
    if (!formData.name.trim() || !formData.station.trim() || !formData.contact.trim() || !formData.specialty) {
      toast.error("Please fill in all personal information fields");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx4H5uv6dViaK2-42L-4SBLvXyZJoebF9ozwwtfty8ioPZgxj3LLz5eONCwjoDa52bY/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        toast.success("✔ Submitted Successfully!", {
          description: "Your form has been submitted.",
          duration: 4000,
        });
        
        // Reset form
        setFormData({
          q1: "",
          q2: "",
          q3: "",
          q4: "",
          q5: "",
          q6: "",
          q7: "",
          q8: "",
          name: "",
          station: "",
          contact: "",
          specialty: "",
        });
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-2xl shadow-[var(--form-shadow)] border-0 bg-white/90">
        <CardHeader className="text-center space-y-1 pb-6">
          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
            SRI LANKA SOCIETY OF NEPHROLOGY
          </CardTitle>
          <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
            6th ANNUAL ACADEMIC SESSIONS 2025
          </CardTitle>
          <CardDescription className="text-muted-foreground pt-2">
            Powered by George Steuart Health (Pvt) Ltd.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Question 1 - MCQ */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
                1. Which calcium channel blocker reduces blood pressure by dilating arteries ?
              </Label>
              <RadioGroup
                value={formData.q1}
                onValueChange={(value) => handleRadioChange("q1", value)}
                required
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="N - type calcium channels" id="q1-option1" />
                  <Label htmlFor="q1-option1" className="font-normal cursor-pointer">
                    N - type calcium channels blocker
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="L - type calcium channels" id="q1-option2" />
                  <Label htmlFor="q1-option2" className="font-normal cursor-pointer">
                    L - type calcium channels blocker
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="R - type calcium channels" id="q1-option3" />
                  <Label htmlFor="q1-option3" className="font-normal cursor-pointer">
                    R - type calcium channels blocker
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="T - type calcium channels" id="q1-option4" />
                  <Label htmlFor="q1-option4" className="font-normal cursor-pointer">
                    T - type calcium channels blocker
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 2 - MCQ */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
               2. Which drug acts on both L- and N- type calcium channels ?
              </Label>
              <RadioGroup
                value={formData.q2}
                onValueChange={(value) => handleRadioChange("q2", value)}
                required
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Nifedipine" id="q2-option1" />
                  <Label htmlFor="q2-option1" className="font-normal cursor-pointer">
                    Nifedipine
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Amlodipine" id="q2-option2" />
                  <Label htmlFor="q2-option2" className="font-normal cursor-pointer">
                    Amlodipine
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Cilnidipine" id="q2-option3" />
                  <Label htmlFor="q2-option3" className="font-normal cursor-pointer">
                    Cilnidipine
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Verapamil" id="q2-option4" />
                  <Label htmlFor="q2-option4" className="font-normal cursor-pointer">
                    Verapamil
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 3 - MCQ */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
                3. Metolazone acts primarily on which nephron segment ?
              </Label>
              <RadioGroup
                value={formData.q3}
                onValueChange={(value) => handleRadioChange("q3", value)}
                required
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Early distal convoluted tubule" id="q3-option1" />
                  <Label htmlFor="q3-option1" className="font-normal cursor-pointer">
                    Early distal convoluted tubule
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Thick ascending limb" id="q3-option2" />
                  <Label htmlFor="q3-option2" className="font-normal cursor-pointer">
                    Thick ascending limb
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Proximal tubule" id="q3-option3" />
                  <Label htmlFor="q3-option3" className="font-normal cursor-pointer">
                    Proximal tubule
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Collecting duct" id="q3-option4" />
                  <Label htmlFor="q3-option4" className="font-normal cursor-pointer">
                    Collecting duct
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 4 - MCQ */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
                4. Which electrolyte abnormality is MOST strongly associated with metolazone in nephrology patients ?
              </Label>
              <RadioGroup
                value={formData.q4}
                onValueChange={(value) => handleRadioChange("q4", value)}
                required
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Hyperkalemia" id="q4-option1" />
                  <Label htmlFor="q4-option1" className="font-normal cursor-pointer">
                    Hyperkalemia
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Hyponatremia" id="q4-option2" />
                  <Label htmlFor="q4-option2" className="font-normal cursor-pointer">
                    Hyponatremia
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Hypercalcemia" id="q4-option3" />
                  <Label htmlFor="q4-option3" className="font-normal cursor-pointer">
                    Hypercalcemia
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Hypermagnesemia" id="q4-option4" />
                  <Label htmlFor="q4-option4" className="font-normal cursor-pointer">
                    Hypermagnesemia
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 5 - MCQ */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-foreground">
                5. Darbepoetin alfa is most commonly used for anemia associated with ?
              </Label>
              <RadioGroup
                value={formData.q5}
                onValueChange={(value) => handleRadioChange("q5", value)}
                required
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Acute blood loss" id="q5-option1" />
                  <Label htmlFor="q5-option1" className="font-normal cursor-pointer">
                    Acute blood loss
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Hemolytic anemia" id="q5-option2" />
                  <Label htmlFor="q5-option2" className="font-normal cursor-pointer">
                    Hemolytic anemia
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Thalassemia major" id="q5-option3" />
                  <Label htmlFor="q5-option3" className="font-normal cursor-pointer">
                    Thalassemia major
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Chronic kidney disease" id="q5-option4" />
                  <Label htmlFor="q5-option4" className="font-normal cursor-pointer">
                    Chronic kidney disease
                  </Label>
                </div>
              </RadioGroup>
            </div>


            {/* Question 6 - Text Input */}
            <div className="space-y-2">
              <Label htmlFor="q6" className="text-sm font-medium text-foreground">
                6. What is the brand name of 4th generation calcium channel blocker (Cilnidipine) marketed by George Steuart Health?
              </Label>
              <Input
                id="q6"
                name="q6"
                value={formData.q6}
                onChange={handleInputChange}
                placeholder="Enter brand name"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 7 - Text Input */}
            <div className="space-y-2">
              <Label htmlFor="q7" className="text-sm font-medium text-foreground">
                7. What is the brand name of Metolazone product marketed by George Steuart Health?
              </Label>
              <Input
                id="q7"
                name="q7"
                value={formData.q7}
                onChange={handleInputChange}
                placeholder="Enter brand name"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Question 8 - Text Input */}
            <div className="space-y-2">
              <Label htmlFor="q8" className="text-sm font-medium text-foreground">
                8. What is the brand name of Darbepoetin alfa IV marketed by Divasa Pharma?
              </Label>
              <Input
                id="q8"
                name="q8"
                value={formData.q8}
                onChange={handleInputChange}
                placeholder="Enter brand name"
                required
                className="bg-background border-input"
              />
            </div>

            {/* Personal Information Section */}
            <div className="pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-input"
                  />
                </div>

                {/* Station */}
                <div className="space-y-2">
                  <Label htmlFor="station" className="text-sm font-medium text-foreground">
                    Station
                  </Label>
                  <Input
                    id="station"
                    name="station"
                    value={formData.station}
                    onChange={handleInputChange}
                    placeholder="Your station"
                    required
                    className="bg-background border-input"
                  />
                </div>

                {/* Contact Number */}
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-sm font-medium text-foreground">
                    Contact Number
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    type="tel"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Your contact number"
                    required
                    className="bg-background border-input"
                  />
                </div>

                {/* Specialty - Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="specialty" className="text-sm font-medium text-foreground">
                    Specialty *
                  </Label>
                  <Select
                    value={formData.specialty}
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger className="bg-background border-input">
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Consultant (Specialist Consultant)">
                        Consultant (Specialist Consultant)
                      </SelectItem>
                      <SelectItem value="Senior Registrar (SR)">
                        Senior Registrar (SR)
                      </SelectItem>
                      <SelectItem value="Registrar">
                        Registrar
                      </SelectItem>
                      <SelectItem value="Senior House Officer (SHO) / Medical Officer (MO)">
                        Senior House Officer (SHO) / Medical Officer (MO)
                      </SelectItem>
                      <SelectItem value="House Officer / Intern Medical Officer">
                        House Officer / Intern Medical Officer
                      </SelectItem>
                      <SelectItem value="General Practitioner (Private Only)">
                        General Practitioner (Private Only)
                      </SelectItem>
                      <SelectItem value="Medical Student">
                        Medical Student
                      </SelectItem>
                      <SelectItem value="Other">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-6 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
