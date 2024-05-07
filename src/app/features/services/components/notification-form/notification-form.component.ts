import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListDetailSharedService } from '../../../../core/services/services/list-detail-shared.service';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Notification } from '../../../../core/models/services/notification';
import { SendNotificationService } from '../../../../core/services/services/send-notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification-form',
  standalone: true,
  imports: [CommonModule, NotificationFormComponent, ReactiveFormsModule],
  templateUrl: './notification-form.component.html',
  styleUrls: ['./notification-form.component.scss']
})
export class NotificationFormComponent implements OnInit {

  selectedService: Notification | undefined;
  notificationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastrService,
    private listDetailSharedService: ListDetailSharedService,
    private service: SendNotificationService,
  ) { }

  ngOnInit() {
    this.notificationForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.listDetailSharedService.getDataNotification().subscribe(data => {
      this.selectedService = data;
    });

  }

  sendNotification() {
    this.service.sendMasiveNotification(new Notification(this.notificationForm.value.message, this.selectedService!.id_servicio))
      .subscribe(notificationSendSucess => {
        this.toastr.success('Confirmation', 'Se registro servicio exitosamente!', { closeButton: true });
        this.notificationForm.reset();
      })

  }
}
