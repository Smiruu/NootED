# Generated by Django 5.1.1 on 2024-10-06 01:30

import django.core.validators
import django.db.models.deletion
import notes.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('groups', '0005_chatmessage'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Title',
            fields=[
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='groups.group')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('file', models.FileField(blank=True, null=True, upload_to=notes.models.upload_to_file, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf', 'jpg', 'jpeg', 'png'])])),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='groups.group')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('title', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notes.title')),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('video', models.FileField(blank=True, null=True, upload_to=notes.models.upload_to_video, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['mp4'])])),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='groups.group')),
                ('title', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notes.title')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
