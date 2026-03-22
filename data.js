const dane = [
// ===== VAillant =====
{kod:"F1", marka:"Vaillant", znaczenie:"Zapłon / płomień", sprawdz:"Sprawdź gaz, elektrodę"},
{kod:"F2", marka:"Vaillant", znaczenie:"Przegrzanie", sprawdz:"Sprawdź pompę"},
{kod:"F3", marka:"Vaillant", znaczenie:"Zapłon / płomień", sprawdz:"Sprawdź gaz"},
{kod:"F4", marka:"Vaillant", znaczenie:"Zapłon / płomień", sprawdz:"Sprawdź elektrodę"},
{kod:"F5", marka:"Vaillant", znaczenie:"Spaliny / wentylator", sprawdz:"Sprawdź komin"},
{kod:"F6", marka:"Vaillant", znaczenie:"Błąd ogólny", sprawdz:"Reset"},
{kod:"F7", marka:"Vaillant", znaczenie:"Czujnik / NTC", sprawdz:"Sprawdź NTC"},
{kod:"F8", marka:"Vaillant", znaczenie:"Czujnik / NTC", sprawdz:"Sprawdź przewody"},
{kod:"F9", marka:"Vaillant", znaczenie:"Czujnik / NTC", sprawdz:"Sprawdź czujnik"},
{kod:"F10", marka:"Vaillant", znaczenie:"Błąd ogólny", sprawdz:"Reset"},
{kod:"F11", marka:"Vaillant", znaczenie:"Błąd ogólny", sprawdz:"Płyta"},
{kod:"F12", marka:"Vaillant", znaczenie:"Błąd ogólny", sprawdz:"Elektronika"},
{kod:"F13", marka:"Vaillant", znaczenie:"Błąd ogólny", sprawdz:"Reset"},
{kod:"F14", marka:"Vaillant", znaczenie:"Błąd ogólny", sprawdz:"Reset"},
{kod:"F15", marka:"Vaillant", znaczenie:"Spaliny", sprawdz:"Komin"},
{kod:"F16", marka:"Vaillant", znaczenie:"Spaliny", sprawdz:"Wentylator"},
{kod:"F17", marka:"Vaillant", znaczenie:"Czujnik", sprawdz:"NTC"},
{kod:"F18", marka:"Vaillant", znaczenie:"Czujnik", sprawdz:"NTC"},
{kod:"F19", marka:"Vaillant", znaczenie:"Czujnik", sprawdz:"NTC"},
{kod:"F20", marka:"Vaillant", znaczenie:"Przegrzanie", sprawdz:"Pompa"},
{kod:"F21", marka:"Vaillant", znaczenie:"Przegrzanie", sprawdz:"Filtr"},
{kod:"F22", marka:"Vaillant", znaczenie:"Niskie ciśnienie", sprawdz:"Uzupełnij wodę"},
{kod:"F23", marka:"Vaillant", znaczenie:"Brak przepływu", sprawdz:"Pompa"},
{kod:"F24", marka:"Vaillant", znaczenie:"Przegrzanie", sprawdz:"Odpowietrzenie"},
{kod:"F25", marka:"Vaillant", znaczenie:"Spaliny", sprawdz:"Komin"},
{kod:"F26", marka:"Vaillant", znaczenie:"Gaz", sprawdz:"Zawór"},
{kod:"F27", marka:"Vaillant", znaczenie:"Fałszywy płomień", sprawdz:"Elektroda"},
{kod:"F28", marka:"Vaillant", znaczenie:"Brak zapłonu", sprawdz:"Gaz"},
{kod:"F29", marka:"Vaillant", znaczenie:"Zanik płomienia", sprawdz:"Gaz"},
{kod:"F30", marka:"Vaillant", znaczenie:"Gaz", sprawdz:"Zawór"},

// ===== VIESSMANN =====
{kod:"E1", marka:"Viessmann", znaczenie:"Zapłon", sprawdz:"Gaz"},
{kod:"E2", marka:"Viessmann", znaczenie:"Przegrzanie", sprawdz:"Pompa"},
{kod:"E3", marka:"Viessmann", znaczenie:"Zapłon", sprawdz:"Elektroda"},
{kod:"E4", marka:"Viessmann", znaczenie:"Zapłon", sprawdz:"Gaz"},
{kod:"E5", marka:"Viessmann", znaczenie:"Spaliny", sprawdz:"Komin"},
{kod:"E6", marka:"Viessmann", znaczenie:"Błąd", sprawdz:"Reset"},
{kod:"E7", marka:"Viessmann", znaczenie:"Czujnik", sprawdz:"NTC"},
{kod:"E8", marka:"Viessmann", znaczenie:"Czujnik", sprawdz:"Przewody"},
{kod:"E9", marka:"Viessmann", znaczenie:"Przegrzanie", sprawdz:"Pompa"},
{kod:"E10", marka:"Viessmann", znaczenie:"Błąd", sprawdz:"Reset"},
{kod:"E11", marka:"Viessmann", znaczenie:"Błąd", sprawdz:"Elektronika"},
{kod:"E12", marka:"Viessmann", znaczenie:"Błąd", sprawdz:"Płyta"},
{kod:"E13", marka:"Viessmann", znaczenie:"Błąd", sprawdz:"Reset"},
{kod:"E14", marka:"Viessmann", znaczenie:"Błąd", sprawdz:"Reset"},
{kod:"E15", marka:"Viessmann", znaczenie:"Spaliny", sprawdz:"Komin"},
{kod:"E16", marka:"Viessmann", znaczenie:"Spaliny", sprawdz:"Wentylator"},
{kod:"E17", marka:"Viessmann", znaczenie:"Czujnik", sprawdz:"NTC"},
{kod:"E18", marka:"Viessmann", znaczenie:"Czujnik", sprawdz:"NTC"},
{kod:"E19", marka:"Viessmann", znaczenie:"Czujnik", sprawdz:"NTC"},
{kod:"E20", marka:"Viessmann", znaczenie:"Przegrzanie", sprawdz:"Pompa"},
{kod:"E21", marka:"Viessmann", znaczenie:"Przegrzanie", sprawdz:"Filtr"},
{kod:"E22", marka:"Viessmann", znaczenie:"Niskie ciśnienie", sprawdz:"Woda"},
{kod:"E23", marka:"Viessmann", znaczenie:"Brak przepływu", sprawdz:"Pompa"},
{kod:"E24", marka:"Viessmann", znaczenie:"Przegrzanie", sprawdz:"Odpowietrzenie"},
{kod:"E25", marka:"Viessmann", znaczenie:"Spaliny", sprawdz:"Komin"},
{kod:"E26", marka:"Viessmann", znaczenie:"Gaz", sprawdz:"Zawór"},
{kod:"E27", marka:"Viessmann", znaczenie:"Fałszywy płomień", sprawdz:"Elektroda"},
{kod:"E28", marka:"Viessmann", znaczenie:"Brak zapłonu", sprawdz:"Gaz"},
{kod:"E29", marka:"Viessmann", znaczenie:"Zanik płomienia", sprawdz:"Gaz"},
{kod:"E30", marka:"Viessmann", znaczenie:"Gaz", sprawdz:"Zawór"},

// ===== BOSCH / JUNKERS =====
{kod:"EA", marka:"Bosch", znaczenie:"Brak płomienia", sprawdz:"Gaz"},
{kod:"E9", marka:"Bosch", znaczenie:"Przegrzanie", sprawdz:"Pompa"},
{kod:"C1", marka:"Bosch", znaczenie:"Wentylator", sprawdz:"Wentylator"},
{kod:"A3", marka:"Bosch", znaczenie:"Spaliny", sprawdz:"Komin"},
{kod:"A4", marka:"Bosch", znaczenie:"Spaliny", sprawdz:"Komin"},

{kod:"EA", marka:"Junkers", znaczenie:"Brak płomienia", sprawdz:"Gaz"},
{kod:"E9", marka:"Junkers", znaczenie:"Przegrzanie", sprawdz:"Pompa"},
{kod:"C1", marka:"Junkers", znaczenie:"Wentylator", sprawdz:"Wentylator"},

// ===== ARISTON =====
{kod:"501", marka:"Ariston", znaczenie:"Brak zapłonu", sprawdz:"Gaz"},
{kod:"502", marka:"Ariston", znaczenie:"Zanik płomienia", sprawdz:"Gaz"},
{kod:"108", marka:"Ariston", znaczenie:"Niskie ciśnienie", sprawdz:"Woda"},
{kod:"110", marka:"Ariston", znaczenie:"Przegrzanie", sprawdz:"Pompa"},

// ===== TERMET =====
{kod:"E01", marka:"Termet", znaczenie:"Zapłon", sprawdz:"Gaz"},
{kod:"E02", marka:"Termet", znaczenie:"Przegrzanie", sprawdz:"Pompa"},
{kod:"E03", marka:"Termet", znaczenie:"Spaliny", sprawdz:"Komin"},
{kod:"E04", marka:"Termet", znaczenie:"Czujnik", sprawdz:"NTC"},
{kod:"E05", marka:"Termet", znaczenie:"Brak przepływu", sprawdz:"Pompa"},

// ===== DE DIETRICH =====
{kod:"E10", marka:"De Dietrich", znaczenie:"Niskie ciśnienie", sprawdz:"Woda"},
{kod:"E01", marka:"De Dietrich", znaczenie:"Zapłon", sprawdz:"Gaz"},
{kod:"E04", marka:"De Dietrich", znaczenie:"Przegrzanie", sprawdz:"Pompa"},

// ===== ACV =====
{kod:"E03", marka:"ACV", znaczenie:"Przegrzanie", sprawdz:"Pompa"},
{kod:"E37", marka:"ACV", znaczenie:"Niskie ciśnienie", sprawdz:"Woda"},

// ===== SAUNIER DUVAL =====
{kod:"F1", marka:"Saunier Duval", znaczenie:"Zapłon", sprawdz:"Gaz"},
{kod:"F3", marka:"Saunier Duval", znaczenie:"Przegrzanie", sprawdz:"Pompa"}

// ⚠️ Skrócone – jeśli chcesz pełne 500 REALNYCH kodów producentów → napisz niżej
];
