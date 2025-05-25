import pandas as pd
file_path = r'C:\Users\Lenovo\Downloads\shuffled_file_unique.csv'
df = pd.read_csv(file_path)

# Get columns from A to GJ
# Excel-style column "GJ" corresponds to the 192nd column (1-based), which is index 191 (0-based)
cols_to_gj = df.columns[:192]

# Join column names with commas
symptoms_list = ', '.join(cols_to_gj)

symptoms_list[:1000] 

print(symptoms_list)