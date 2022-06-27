from cmath import e
from fileinput import filename
import os

dict_all = {}
dict_only_filetypes = {}

# old approach
# for filename in os.listdir('/Users/sid/Downloads'):
#     if filename.count('.') == 0:
#         dict_all[filename] = {}
#         for file_within in os.listdir(f'/Users/sid/Downloads/{filename}'):
#             extension_within = file_within.split('.')[-1]
#             if extension_within not in dict_all[filename]:
#                 dict_all[filename][extension_within] = 1
#             else:
#                 dict_all[filename][extension_within] += 1
#     else:
#         pieces = filename.split('.')
#         extension = pieces[-1]
#         if extension not in dict_all:
#             dict_all[extension] = 1
#         else:
#             dict_all[extension] += 1

# print(dict_all)
# max = 0

# for key in dict_all:
#     if type(dict_all[key]) is dict:
#         for sub_key in dict_all[key]:
#             if sub_key not in dict_only_filetypes:
#                 dict_only_filetypes[sub_key] = dict_all[key][sub_key]
#             else:
#                 dict_only_filetypes[sub_key] += 1
#     else:
#         if key not in dict_only_filetypes:
#             dict_only_filetypes[key] = dict_all[key]
#         else:
#             dict_only_filetypes[key] = dict_all[key] + dict_only_filetypes[key]

# print('\n''\n', dict_only_filetypes)

# new approach
# i = 0
max = 0
folders = 0
for (roots, dirs, files) in os.walk('/Users/sid/Downloads'):
    # print(f'roots -> {i} -> {roots}')
    # print(f'dirs -> {i} -> {dirs}')
    # print(f'files -> {i} -> {files}')
    # i += 1
    for dir in dirs:
        folders += 1
    for file in files:
        extension = file.split('.')[-1]
        if extension not in dict_all:
            dict_all[extension] = 1
        else:
            dict_all[extension] += 1
            if (dict_all[extension] > max):
                max = dict_all[extension]
                most_filetypes = extension

for key in dict_all:
    print(f'{dict_all[key]} {key}\'s')
print(f'Total number of folders in root specified -> {folders}')
print(f'Highest occuring file-type is -> {most_filetypes}')
